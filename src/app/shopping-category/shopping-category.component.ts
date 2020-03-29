import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCategory } from '../interfaces/ShoppingCategory';
import { ShoppingElement } from '../interfaces/ShoppingElement';

@Component({
  selector: 'app-shopping-category',
  templateUrl: './shopping-category.component.html',
  styleUrls: ['./shopping-category.component.css']
})
export class ShoppingCategoryComponent implements OnInit {

  @Input() category: ShoppingCategory;

  @Input() isModifing: boolean;

  @Input() expanded: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

  createElement(): void {
    let element: ShoppingElement = {
      name: '',
      quantity: 0,
      description: ''
    }
    this.category.elementList.push(element)
  }

  removeElement(element: ShoppingElement) {
    let index = this.category.elementList.indexOf(element);
    if(index>0){
      this.category.elementList.splice(index, 1);
    }
  }

}
