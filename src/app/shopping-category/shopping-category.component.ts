import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCategory } from '../interfaces/ShoppingCategory';

@Component({
  selector: 'app-shopping-category',
  templateUrl: './shopping-category.component.html',
  styleUrls: ['./shopping-category.component.css']
})
export class ShoppingCategoryComponent implements OnInit {

  @Input() category: ShoppingCategory;

  constructor() { }

  ngOnInit(): void {
  }

}
