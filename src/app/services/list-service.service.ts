import { Injectable } from '@angular/core';
import { ShoppingList } from '../interfaces/ShoppingList';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ShoppingElement } from '../interfaces/ShoppingElement';
import { isPlatformServer } from '@angular/common';
import { ShoppingCategory } from '../interfaces/ShoppingCategory';



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
    return this.http.get<ShoppingList[]>(this.backendUrl + "shoppinglist");
  }
  
  getList(id: string) {
    return this.http.get<ShoppingList>(this.backendUrl + "shoppinglist/" + id);
  }
  
  saveList(list: ShoppingList) {
    return this.http.post<ShoppingList>(this.backendUrl, list);
  } 
  
  deleteList(list: ShoppingList): Observable<any> {
    let resourceUri = this.backendUrl + encodeURIComponent(list.name);
    return this.http.delete(resourceUri);
  }
  
  saveElement(element: ShoppingElement): Observable<ShoppingElement> {
    let resourceUri = this.backendUrl + "shoppingelement"
    return this.http.post<ShoppingElement>(resourceUri, element);
  }

  saveCategory(category: ShoppingCategory): Observable<ShoppingCategory> {
    let resourceUri = this.backendUrl + "shoppingcategory"
    return this.http.post<ShoppingCategory>(resourceUri, category);
  }
      
}
