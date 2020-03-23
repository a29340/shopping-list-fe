import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../interfaces/ShoppingList';
import { ListService } from '../services/list-service.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  list: ShoppingList;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.list = {
      "name": "",
      "description": "",
      "categoryList": []
    }
    this.getLists()
  }

  getLists(): void {
    this.listService.getList().subscribe({
      next: (lists => {
        this.list = lists[0];
      }),
      error: (error => console.log("Error loading lists: " + error))
    })
  }

}
