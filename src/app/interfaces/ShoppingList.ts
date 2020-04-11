import {ShoppingCategory} from './ShoppingCategory';

export interface ShoppingList {
    id: number;
    name: string;
    description: string;
    categoryList: ShoppingCategory[];
}
