import {ShoppingCategory} from './ShoppingCategory';

export interface ShoppingList {
    name: string;
    description: string;
    categoryList: ShoppingCategory[];
}
