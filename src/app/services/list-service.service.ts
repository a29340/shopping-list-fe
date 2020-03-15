import { Injectable } from '@angular/core';
import { ShoppingList } from '../interfaces/ShoppingList';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  static getList(): ShoppingList {
    return {
      name: 'Esselunga',
      description: 'Lista della spesa ordinaria',
      categoryList: [
        {
          name: 'Verdura',
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
          name: 'Colazione',
          description: '',
          elementList: [{
            name: 'Biscotti',
            description: '',
            quantity: 1
          },
          {
            name: 'Yogurt',
            description: 'quelle dolci',
            quantity: 2
          }],
          subcategoryList: []
        },
        {
          name: 'Banco',
          description: 'descrizione 3',
          elementList: [
            {
            name: 'Prosciutto cotto',
            description: '',
            quantity: 5
          },
          {
            name: 'Pane',
            description: 'quelle dolci',
            quantity: 6
          }
        ],
          subcategoryList: []
        }
      ]
    };
  }

  constructor() { }

  getList() {
    
  }
}
