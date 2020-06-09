import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-new-list-modal',
  templateUrl: './new-list-modal.component.html',
  styleUrls: ['./new-list-modal.component.css']
})
export class NewListModalComponent implements OnInit {

  name = new FormControl('', [
    Validators.required
  ]);

  description = new FormControl('');

  constructor(public dialogRef: MatDialogRef<NewListModalComponent>) { }

  ngOnInit(): void {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  createNewElement() {
    if (this.name.errors == null) {
      this.dialogRef.close({
        name: this.name.value,
        description: this.description.value
      })
    }
  }
}
