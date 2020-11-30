import {Component, OnInit} from '@angular/core';
import {ShoppingList} from '../interfaces/ShoppingList';
import {ListService} from '../services/list-service.service';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';
import {NewListModalComponent} from './new-list-modal/new-list-modal.component';
import {inOut} from '../animations/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [inOut]
})
export class HomeComponent implements OnInit {

  lists: ShoppingList[];
  isDragging = false;
  private bounce: boolean;

  constructor(private listService: ListService, private dialog: MatDialog) { }

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
    this.listService.getUserLists().subscribe({
      next: (lists => {
        this.lists = lists;
      }),
      error: (error => console.log("Error loading lists: " + error))
    })
  }

  deleteList(event: CdkDragDrop<ShoppingList>): boolean {
    const previousContainer = event.previousContainer
    const listToDelete = previousContainer.data[event.previousIndex]
    this.listService.deleteList(listToDelete).subscribe({
      next: () => {
        console.log("deleted " + listToDelete.name)
        this.lists.splice(this.lists.indexOf(listToDelete), 1);
      },
      error: () => {
        console.log("Error deleting " + listToDelete.name);
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

  addNewList() {
    const dialogRef = this.dialog.open(NewListModalComponent, {
      width: '300px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.listService.saveList({
          id: null,
          name: result.name,
          categoryList: [],
          description: result.description
        }).subscribe({
          next: () => console.log('success'),
          error: () => console.log('error')
        })
      }
    })
  }
  startedDragging() {
    this.isDragging = true;
    this.bounce = false;
  }

  stoppedDragging() {
    this.isDragging = false;
  }

}
