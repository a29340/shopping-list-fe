import { Injectable } from '@angular/core';
import { ShoppingList } from '../interfaces/ShoppingList';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  static getList(): ShoppingList {
    return {
      name: 'Prima lista',
      description: 'Prima lista mai scritta in typescript da me',
      categoryList: [
        {
          name: 'categoria 1',
          description: 'descrizione 1',
          elementList: [
            {
              name: 'Carote',
              description: '',
              quantity: 5
            },
            {
              name: 'Patate',
              description: 'quelle dolci',
              quantity: 6
            }
          ],
          subcategoryList: []
        },
        {
          name: 'categoria 2',
          description: 'descrizione 2',
          elementList: [],
          subcategoryList: []
        },
        {
          name: 'categoria 3',
          description: 'descrizione 3',
          elementList: [],
          subcategoryList: []
        }
      ]
    };
  }

  constructor() { }

  getList() {
    
  }
}
