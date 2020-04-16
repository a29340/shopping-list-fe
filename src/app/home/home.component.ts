import {Component, OnInit} from '@angular/core';
import {ShoppingList} from '../interfaces/ShoppingList';
import {ListService} from '../services/list-service.service';
import {CdkDragDrop} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lists: ShoppingList[];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.lists = [{
      "id": null,
      "name": "",
      "description": "",
      "categoryList": []
    }]
    this.getLists()
  }

  saveList(list: ShoppingList): void {
    this.listService.saveList(list).subscribe({
      next: function () {
        console.log("Salvato!")
      },
      error: function () {
        console.log("Errore!")
      }
    });
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

  drop(event: CdkDragDrop<ShoppingList[]>) {
    if (event.currentIndex != this.lists.length) {
      let swappingList = this.lists[event.currentIndex]
      this.lists[event.currentIndex] = this.lists[event.previousIndex]
      this.lists[event.previousIndex] = swappingList
    }
  }
}
