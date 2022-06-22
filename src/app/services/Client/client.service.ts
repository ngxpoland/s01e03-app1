import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from 'src/app/models/client';
import { CLIENTS_EXAMPLE_DATASET1 } from '../../fakeData/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  constructor() { }

  public getClients(): Observable<Client[]> {
    return of(CLIENTS_EXAMPLE_DATASET1);
    // pobieranie danych z serwera (baza danych)
  }

  public addClient(client: Client): void {
    
  }
}
