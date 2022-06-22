import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientService } from 'src/app/services/Client/client.service';
import { ClientsNewComponent } from '../clients-new/clients-new.component';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  @Input() isToolbarVisible: boolean = true;
  public dialogRef: any;
  displayedColumns: string[] = ['id', 'name', 'surname', 'email'];

  // public clients = [
  //   { id: 1, name: 'Jan', surname: 'Kowalski'},
  //   { id: 2, name: 'Adam', surname: 'Nowak'},
  //   { id: 3, name: 'Anna', surname: 'Kwiatkowska'},
  // ];

  constructor(
    public clientService: ClientService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

  }

  openAddDialog() {
    this.dialogRef = this.dialog.open(
      ClientsNewComponent, 
      {
        width: '100%', 
        data: { 
          id: 0, 
          name: '', 
          surname: '', 
          email: '', 
          phone: ''
        }
      }
    );
    this.dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed', result);
      
    });
  }

  public handleAdd(): void {
    this.openAddDialog();
  }

  public handleEdit(): void {
    alert('Not implemented!');
  }

  public handleDelete(): void {
    alert('Not implemented!');
  }

}
