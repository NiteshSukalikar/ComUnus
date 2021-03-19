import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  url = "https://jsonplaceholder.typicode.com/photos";

  getData() {
    return  this.http.get(this.url);
  }

}
