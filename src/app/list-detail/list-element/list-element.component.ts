import { Component, OnInit, Input } from '@angular/core';
import { ShoppingElement } from 'src/app/interfaces/ShoppingElement';
import { ListService } from 'src/app/services/list-service.service';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.modifiedElement = { ...this.element };
  }

  @Input() element: ShoppingElement;

  modifiedElement: ShoppingElement;

  saveElement(): void {
    if (JSON.stringify(this.element) != JSON.stringify(this.modifiedElement)) {
      this.listService.saveElement(this.modifiedElement).subscribe({
        next: (returnedElement) => {
          this.element = returnedElement;
        },
        error: () => {
          console.log("Error saving element with id: " + this.element.id);
        }
      })
    }
  }
}
