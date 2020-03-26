import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../interfaces/ShoppingList';
import { ListService } from '../services/list-service.service';

@Component({
  selector: 'shopping-list-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit {

  constructor(private listService: ListService) { }

  lists: ShoppingList[];

  ngOnInit(): void {
    this.lists = [{
      "name": "",
      "description": "",
      "categoryList": []
    }]
    this.getLists()
  }

  getLists(): void {
    this.listService.getList().subscribe({
      next: (lists => {
        this.lists = lists;
      }),
      error: (error => console.log("Error loading lists: " + error))
    })
  }

}
