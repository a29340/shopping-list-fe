import {Injectable} from '@angular/core';
import {ShoppingList} from '../interfaces/ShoppingList';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ShoppingElement} from '../interfaces/ShoppingElement';
import {ShoppingCategory} from '../interfaces/ShoppingCategory';


@Injectable({
  providedIn: 'root'
})
export class ListService {


  constructor(private http: HttpClient) {

  }


  getLists(): Observable<ShoppingList[]> {
    return this.http.get<ShoppingList[]>(environment.backendUrl + "shopping/list");
  }

  getList(id: string) {
    return this.http.get<ShoppingList>(environment.backendUrl + "shopping/list/" + id);
  }

  saveList(list: ShoppingList) {
    return this.http.post<ShoppingList>(environment.backendUrl + "shopping/list", list);
  }

  deleteList(list: ShoppingList): Observable<any> {
    let resourceUri = environment.backendUrl + "shopping/list/" + encodeURIComponent(list.id);
    return this.http.delete(resourceUri);
  }

  saveElement(element: ShoppingElement): Observable<ShoppingElement> {
    let resourceUri = environment.backendUrl + "shopping/element"
    return this.http.post<ShoppingElement>(resourceUri, element);
  }

  saveCategory(category: ShoppingCategory): Observable<ShoppingCategory> {
    let resourceUri = environment.backendUrl + "shopping/category"
    return this.http.post<ShoppingCategory>(resourceUri, category);
  }

}
