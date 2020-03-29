import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingElement } from '../interfaces/ShoppingElement';
import { ListService } from '../services/list-service.service';

@Component({
  selector: 'app-shopping-element',
  templateUrl: './shopping-element.component.html',
  styleUrls: ['./shopping-element.component.css']
})
export class ShoppingElementComponent implements OnInit {

  @Input() element: ShoppingElement;
  
  @Input() isModifing: boolean;

  @Output() removeMe = new EventEmitter<ShoppingElement>();
  

  constructor(private listService: ListService) { }

  ngOnInit(): void {

  }

  removeElement(): void {
    this.removeMe.emit(this.element);
  }

}
