import {ShoppingElement} from './ShoppingElement';

export interface ShoppingCategory {
    id: number;
    name: string;
    description: string;
    subcategoryList: ShoppingCategory[];
    elementList: ShoppingElement[];
}
