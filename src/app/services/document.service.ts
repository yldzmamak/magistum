import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalDefinitions } from '../shared/global-definitions';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  constructor(private httpClient: HttpClient) {}

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  getUserDocuments() {
    return this.httpClient.get(GlobalDefinitions.userDocuments, this.httpOptions);
  }
}
