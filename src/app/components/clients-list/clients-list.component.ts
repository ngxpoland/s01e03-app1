import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Client } from 'src/app/models/client';
import { APIStatus } from 'src/app/models/apiStatus';
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
  displayedColumns: string[] = ['select', 'id', 'name', 'surname', 'email', 'phone'];
  clients: Client[] = [];
  clientSelection: Client[] = [];

  constructor(
    public clientService: ClientService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe((data: Client[]) => {
      console.log(data);
      this.clients = data;
    });

    /* Example: RESTfull API calls

    this.clientService.deleteClient({ id: 10 }).subscribe((status: APIStatus) => {
      console.log("delete status: ", status);
    });

    this.clientService.postClients([{ id: 0, name: 'Aleksander', surname: 'Wielki', email: 'awielki@o2.pl', phone: '123 456 999'}]).subscribe((status: APIStatus) => {
      console.log("status: ", status)
    });

    this.clientService.putClient({ id: 12, name: 'Piotr', surname: 'Sójka', email: 'psojka@wp.pl', phone: '601 634 352'}).subscribe((status: APIStatus) => {
      console.log("put status: ", status)
    });

    this.clientService.deleteClient({ id: 10 }).subscribe((status: APIStatus) => {
      console.log("delete status: ", status)
    });
    */
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
    this.dialogRef.afterClosed().subscribe((result: Client) => {
      console.log('The dialog was closed', result);
      if (result) {
        this.clientService.postClients([result]).subscribe((status: APIStatus) => {
          console.log('status: ', status);
          // TODO: Dodać nieinwazyjny komunikat o pomyślnym dodaniu użytkownika i wykonać refresh listy
        });
      }
    });
  }

  public handleAdd(): void {
    this.openAddDialog();
  }

  public handleEdit(): void {
    const str = JSON.stringify(this.clientSelection);
    alert('Edytowanie tych elementów: '+str);
  }

  public handleDelete(): void {
    alert('Not implemented!');
  }

  public checkboxHandler(event: any, row: any): void {
    if (event.checked) {
      this.clientSelection.push(row);
    } else {
      this.clientSelection.splice(this.clientSelection.indexOf(row), 1);
    }
    console.log(this.clientSelection);
  }

}
