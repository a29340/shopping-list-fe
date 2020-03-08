import {ShoppingElement} from './ShoppingElement';

export interface ShoppingCategory {
    name: string;
    description: string;
    subcategoryList: ShoppingCategory[];
    elementList: ShoppingElement[];
}
