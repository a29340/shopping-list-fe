import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../interfaces/ShoppingList';
import { ListService } from '../services/list-service.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  list: ShoppingList;

  constructor() { }

  ngOnInit() {
    this.list = ListService.getList();
  }

}
