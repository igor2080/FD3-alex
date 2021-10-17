import { Product } from "./Product";

export class Apple extends Product {

    constructor(_weight: number) {
        super("Apple", _weight);
    }
}