import {ShoppingElement} from './ShoppingElement';
import {ShoppingCategory} from './ShoppingCategory';

export interface AddModalData {
  elementType: ShoppingElementType,
  name: string,
  description: string,
  categoryId: number,
  quantity: number
}

export enum ShoppingElementType {
  ShoppingCategory,
  ShoppingElement
}
