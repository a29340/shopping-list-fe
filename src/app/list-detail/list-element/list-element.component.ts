import {Component, OnInit, Input, HostListener, Renderer2, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import { ShoppingElement } from 'src/app/interfaces/ShoppingElement';
import { ListService } from 'src/app/services/list-service.service';
import {DragRef} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {

  @ViewChild('elementcheckbox') elementCheckBox: ElementRef;
  @ViewChild('elementcontainer') elementContainer: ElementRef;

  constructor(private listService: ListService, private renderer: Renderer2) {
    /* setting listener for click event inside label and outside element */
    this.renderer.listen('window', 'click',(e:Event)=>{
      if(!this.elementContainer.nativeElement.contains(e.target) ){
        this.selected = false;
      }
      if (this.elementContainer.nativeElement.contains(e.target) && !this.elementCheckBox.nativeElement.contains(e.target)) {
        this.selected = true;
      }
    });

  }

  ngOnInit(): void {
    this.modifiedElement = { ...this.element };
  }

  @Input() element: ShoppingElement;
  selected: boolean;
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

  increment(): void {
    this.modifiedElement.quantity++
    this.saveElement()
  }

  decrement(): void {
    if (this.modifiedElement.quantity >= 1) {
      this.modifiedElement.quantity--
      this.saveElement()
    }
  }
}
