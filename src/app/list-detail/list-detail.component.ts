import {Component, OnInit} from '@angular/core';
import {ListService} from '../services/list-service.service';
import {ActivatedRoute} from '@angular/router';
import {ShoppingList} from '../interfaces/ShoppingList';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ShoppingCategory} from '../interfaces/ShoppingCategory';
import {MatDialog} from '@angular/material/dialog';
import {ListAddModalComponent} from './list-add-modal/list-add-modal.component';
import {AddModalData, ShoppingElementType} from '../interfaces/AddModalData';
import {ShoppingElement} from '../interfaces/ShoppingElement';
import {animate, style, transition, trigger} from '@angular/animations';
import {inOut} from '../animations/animations';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css'],
  animations: [
    inOut
  ]
})
export class ListDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private listService: ListService,
              private dialog: MatDialog) {
  }

  list: ShoppingList = {
    id: null,
    name: '',
    description: '',
    categoryList: []
  };

  bounce: boolean;
  isDragging: boolean;

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.listService.getList(id).subscribe({
      next: (list) => {
        this.list = list;
      },
      error: () => {
        console.log('Error retrieving list with id: ' + id);
      }
    });
  }

  dropCategory(event: CdkDragDrop<any>) {
    moveItemInArray(this.list.categoryList, event.previousIndex, event.currentIndex);
    this.listService.saveList(this.list).subscribe({
      error: () => {
        console.log('Error occurred during list save');
      }
    });
  }

  dropElement(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data.elementList, event.previousIndex, event.currentIndex);
      this.listService.saveCategory(event.container.data).subscribe({
        error: () => console.log('Error occurred during category save')
      });
    } else {
      transferArrayItem(event.previousContainer.data.elementList,
        event.container.data.elementList,
        event.previousIndex,
        event.currentIndex);
      this.listService.saveCategory(event.previousContainer.data).subscribe({
        error: () => console.log('Error occurred during category save')
      });
      this.listService.saveCategory(event.container.data).subscribe({
        error: () => console.log('Error occurred during category save')
      });

    }
  }

  saveCategory(category: ShoppingCategory): void {
    this.listService.saveCategory(category).subscribe({
      error: () => {
        console.log('Error saving category with id: ' + category.id);
      }
    });
  }

  openModal(): void {
    const dialogRef = this.dialog.open(ListAddModalComponent, {
      width: '300px',
      data: this.list.categoryList
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        let newElementType = (result as AddModalData).elementType;
        if (newElementType == ShoppingElementType.ShoppingElement) {
          let element: ShoppingElement = {
            id: null,
            name: result.name,
            description: result.description,
            quantity: result.quantity,
            checked: false
          };
          this.listService.saveElement(element).subscribe({
            next: (saved) => {
              let shoppingCategory = this.list.categoryList.filter(category => category.id == result.categoryId)[0];
              shoppingCategory.elementList.push(saved)
              this.listService.saveCategory(shoppingCategory).subscribe({
                error: (error) => {
                  console.log("Failed to save category with new element: " + JSON.stringify(error))
                  shoppingCategory.elementList.splice(shoppingCategory.elementList.indexOf(saved), 1)
                }
              })
            },
            error: (error) => console.log("Failed saving category with new element: " + error)
          })
        } else if(newElementType == ShoppingElementType.ShoppingCategory) {
          let category: ShoppingCategory ={
            id: null,
            name: result.name,
            description: result.description,
            subcategoryList: [],
            elementList: []
          }
          this.listService.saveCategory(category).subscribe({
            next: (saved) => {
              this.list.categoryList.push(saved)
              this.listService.saveList(this.list).subscribe({
                error: (error) => {
                  console.log("Failed saving list with new category: " + error)
                  this.list.categoryList.splice(this.list.categoryList.indexOf(saved), 1)
                }
              })
            },
            error: (error) => console.log("Failed to save new category: " + error)
          })
        }
      }
    });
  }

  removeElement(event: CdkDragDrop<ShoppingCategory> | CdkDragDrop<ShoppingList>) {
    let data = event.previousContainer.data;
    if (this.isShoppingCategory(data)) {
      console.log('removing element from category: ' + JSON.stringify(data.elementList[event.previousIndex]));
      let shoppingCategory = data as ShoppingCategory;
      let removedElements = shoppingCategory.elementList.splice(event.previousIndex, 1);
      this.listService.saveCategory(shoppingCategory).subscribe({
        next: result =>{
          console.log("Saved category without element")
        },
        error: error => {
          console.log("Error saving category with removed element: " + error)
          shoppingCategory.elementList.push(removedElements[0])
        }
      })
    } else {
      console.log('removing category: ' + JSON.stringify((data as ShoppingList).categoryList[event.previousIndex]));
      let removedCategories = this.list.categoryList.splice(event.previousIndex, 1)
      this.listService.saveList(this.list).subscribe({
        next: result => {
          console.log("Saved list without category")
        },
        error: error => {
          console.log("Error saving list with removed category: " + error)
          this.list.categoryList.push(removedCategories[0])
        }
      })
    }
    this.bounce = true;
  }

  isShoppingCategory(element): element is ShoppingCategory {
    return element.subcategoryList !== undefined;
  }

  startedDragging() {
    this.isDragging = true;
    this.bounce = false;
  }

  stoppedDragging() {
    this.isDragging = false;
  }
}
