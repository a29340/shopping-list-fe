import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../interfaces/ShoppingList';
import { ListService } from '../services/list-service.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  lists: ShoppingList[];

  constructor(private listService: ListService) { }

  ngOnInit() {
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
