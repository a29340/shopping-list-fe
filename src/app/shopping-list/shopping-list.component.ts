import { Component, OnInit, Input } from '@angular/core';
import { ShoppingList } from '../interfaces/ShoppingList';
import { ListService } from '../services/list-service.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  lists: ShoppingList[];

  isModifing: boolean;

  selectedListIndex: number = 0;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.isModifing = false;
    this.lists = [{
      "name": "",
      "description": "",
      "categoryList": []
    }]
    this.getLists()
  }

  toggleModifing(): void {
    this.isModifing = true;
  }

  saveList(list: ShoppingList): void {
    this.listService.saveList(list).subscribe({
      next: function() {
        console.log("Salvato!")
      },
      error: function() {
        console.log("Errore!")
      }
    });
    this.isModifing = false;
  }

  getLists(): void {
    this.listService.getLists().subscribe({
      next: (lists => {
        this.lists = lists;
      }),
      error: (error => console.log("Error loading lists: " + error))
    })
  }

  deleteList(list: ShoppingList): boolean {
    this.listService.deleteList(list).subscribe({
      next: () => {
        console.log("deleted " + list.name)
        this.lists.splice(this.lists.indexOf(list), 1);
      },
      error: () => {
        console.log("Error deleting " + list.name);
      }
    })
    return false;
  }

  createCategory(list: ShoppingList): void {
    list.categoryList.push({
      name: "Nome",
      description: "Description",
      elementList: [],
      subcategoryList: []
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.lists, event.previousIndex, event.currentIndex);
  }
}
