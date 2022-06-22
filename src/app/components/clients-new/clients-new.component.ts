import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-clients-new',
  templateUrl: './clients-new.component.html',
  styleUrls: ['./clients-new.component.scss']
})
export class ClientsNewComponent implements OnInit {
  client: Client = {
    id: 0,
    name: '',
    surname: '',
    email: ''
  };

  formGroup = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    email: new FormControl(),
  });

  constructor(
    public dialogRef: MatDialogRef<ClientsNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Client,
  ) { }

  ngOnInit(): void {
    
  }

  save() {
    console.log(this.formGroup);
    this.client.id = 0;
    this.client.name = this.formGroup.get('name')?.value;
    this.client.surname = this.formGroup.get('surname')?.value;
    this.client.email = this.formGroup.get('email')?.value;
  }

  cancel() {
    this.dialogRef.close();
  }

}
