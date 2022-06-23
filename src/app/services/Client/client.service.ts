import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from 'src/app/models/client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIStatus } from 'src/app/models/apiStatus';

const API_URL = 'http://ngxpoland.com:3000';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
  
  constructor(private http: HttpClient) {}

  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(API_URL+'/clients');
  }

  public postClients(clients: Client[]): Observable<APIStatus> {
    return this.http.post<APIStatus>(API_URL+'/clients', clients, this.httpOptions);
  }

  public putClient(client: Client): Observable<APIStatus> {
    return this.http.put<APIStatus>(API_URL+'/client/'+client.id, client, this.httpOptions);
  }

  public deleteClient(client: Client): Observable<APIStatus> {
    return this.http.delete<APIStatus>(API_URL+'/client/'+client.id, this.httpOptions);
  }
}
