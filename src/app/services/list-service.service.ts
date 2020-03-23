import { Injectable } from '@angular/core';
import { ShoppingList } from '../interfaces/ShoppingList';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  private backendUrl: string;
  
  constructor(private http: HttpClient) { 
    this.backendUrl = environment.backendUrl;
  }
  
  getList(): Observable<ShoppingList[]> {
    return this.http.get<ShoppingList[]>(this.backendUrl);
  }

}
