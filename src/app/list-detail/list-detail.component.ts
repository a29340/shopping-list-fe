import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list-service.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingList } from '../interfaces/ShoppingList';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ShoppingCategory } from '../interfaces/ShoppingCategory';
import { ShoppingElement } from '../interfaces/ShoppingElement';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private listService: ListService) { }

  list: ShoppingList = {
    id: null,
    name: "",
    description: "",
    categoryList: []
  };

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.listService.getList(id).subscribe({
      next: (list) => {
        this.list = list;
      },
      error: () => {
        console.log("Error retrieving list with id: " + id);
      }
    })
  }

  dropCategory(event: CdkDragDrop<ShoppingCategory[]>) {
    moveItemInArray(this.list.categoryList, event.previousIndex, event.currentIndex);
    this.listService.saveList(this.list).subscribe({
      error: () => {
        console.log("Error occurred during list save")
      } 
    })
  }

  dropElement(event: CdkDragDrop<ShoppingCategory>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data.elementList, event.previousIndex, event.currentIndex);
      this.listService.saveCategory(event.container.data).subscribe({
        error: () => console.log("Error occurred during category save")
      })
    } else {
      transferArrayItem(event.previousContainer.data.elementList,
                        event.container.data.elementList,
                        event.previousIndex,
                        event.currentIndex);
      this.listService.saveCategory(event.previousContainer.data).subscribe({
        error: () => console.log("Error occurred during category save")
      })
      this.listService.saveCategory(event.container.data).subscribe({
        error: () => console.log("Error occurred during category save")
      })
      
    }
  }

  saveCategory(category: ShoppingCategory): void {
    this.listService.saveCategory(category).subscribe({
      error: () => {
        console.log("Error saving category with id: " + category.id);
      }
    });
  }

}
