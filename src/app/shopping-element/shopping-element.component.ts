import { Component, OnInit, Input } from '@angular/core';
import { ShoppingElement } from '../interfaces/ShoppingElement';

@Component({
  selector: 'app-shopping-element',
  templateUrl: './shopping-element.component.html',
  styleUrls: ['./shopping-element.component.css']
})
export class ShoppingElementComponent implements OnInit {

  @Input() element: ShoppingElement;
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
