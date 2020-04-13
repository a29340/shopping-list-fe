import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list-service.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingList } from '../interfaces/ShoppingList';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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
  }

  dropElement(event: CdkDragDrop<ShoppingElement[]>, category: ShoppingCategory) {
    moveItemInArray(category.elementList, event.previousIndex, event.currentIndex);
  }

  saveCategory(category: ShoppingCategory): void {
    this.listService.saveCategory(category).subscribe({
      next: (savedCategory) => {
        
      },
      error: () => {
        console.log("Error saving category with id: " + category.id);
      }
    });
  }

}
