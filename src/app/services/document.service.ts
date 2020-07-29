import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalDefinitions } from '../shared/global-definitions';
import { PageEvent } from '@angular/material/paginator';

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

  getUserDocuments(event?: any) {
    let pageIndex = event != null ? (event.pageIndex != undefined ? event.pageIndex : 0) : 0;
    let pageSize = event != null ? (event.pageSize != undefined ? event.pageSize : 10) : 10;
    let query =
      event != null
        ? GlobalDefinitions.userDocuments + '?page=' + pageIndex + '&page_size=' + pageSize
        : GlobalDefinitions.userDocuments;
    return this.httpClient.get(query, this.httpOptions);
  }
}
