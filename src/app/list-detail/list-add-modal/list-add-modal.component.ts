import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ShoppingCategory} from '../../interfaces/ShoppingCategory';
import {AddModalData, ShoppingElementType} from '../../interfaces/AddModalData';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-list-add-modal',
  templateUrl: './list-add-modal.component.html',
  styleUrls: ['./list-add-modal.component.css']
})
export class ListAddModalComponent {
  ShoppingElementType = ShoppingElementType;
  public elementType: ShoppingElementType =this.existingCategories[0] ?
    ShoppingElementType.ShoppingElement :
    ShoppingElementType.ShoppingCategory;
  name = new FormControl('', [
    Validators.required
  ]);
  public description: string;
  public quantity: number = 0;
  public categoryId: number = this.existingCategories[0]? this.existingCategories[0].id : null;

  constructor(public dialogRef: MatDialogRef<ListAddModalComponent>,
              @Inject(MAT_DIALOG_DATA) public existingCategories: ShoppingCategory[]) {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  createNewElement(): void {
    if (this.name.errors == null) {
      this.dialogRef.close({
        elementType: this.elementType,
        name: this.name.value,
        description: this.description,
        categoryId: this.categoryId,
        quantity: this.quantity
      })
    }
  }
}
