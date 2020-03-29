import { Injectable } from '@angular/core';
import { ShoppingList } from '../interfaces/ShoppingList';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ShoppingElement } from '../interfaces/ShoppingElement';
import { isPlatformServer } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class ListService {
  
  private backendUrl: string;
  
  private lists: ShoppingList[] = []; 
  
  constructor(private http: HttpClient) { 
    this.backendUrl = environment.backendUrl;
  }
  
  getLists(): Observable<ShoppingList[]> {
    return this.http.get<ShoppingList[]>(this.backendUrl);
  }
  
  saveList(list: ShoppingList) {
    return this.http.post<ShoppingList>(this.backendUrl, list)
  } 

}
