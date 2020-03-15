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

  constructor() { }

  ngOnInit() {
    this.list = ListService.getList();
  }

}
