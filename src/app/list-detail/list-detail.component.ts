import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list-service.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingList } from '../interfaces/ShoppingList';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private listService: ListService) { }

  list: ShoppingList = {
    id: null,
    name: "",
    description: "",
    categoryList: []
  };

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.listService.getList(id).subscribe({
      next: (list) => {
        this.list = list;
      },
      error: () => {
        console.log("Error retrieving list with id: " + id);
      }
    })
  }

}
