import { Component, OnInit, Input } from '@angular/core';
import { ShoppingList } from '../interfaces/ShoppingList';
import { ListService } from '../services/list-service.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Input() list: ShoppingList;


  isModifing: boolean;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.isModifing = false;
  }

  toggleModifing(): void {
    this.isModifing = true;
  }

  saveList(): void {
    this.listService.saveList(this.list).subscribe({
      next: function() {
        console.log("Salvato!")
      },
      error: function() {
        console.log("Errore!")
      }
    });
    this.isModifing = false;
  }

}
