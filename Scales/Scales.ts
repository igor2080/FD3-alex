import { Apple } from './Apple';
import { Tomato } from './Tomato';
import { Product } from './Product';

export class Scales {
    products: Product[];

    add(product: Product): void {
        this.products.push(product);
    }

    getSumScale(): void {
        let sumScale: number = 0;
        for (let i: number = 0; i < this.products.length; i++) {
            sumScale += this.products[i].getScale();
        }
        console.log("Sum of all the products: " + sumScale);
    }

    getNameList(): void {
        let productNames: string;
        for (let i: number = 0; i < this.products.length; i++) {
            productNames += this.products[i] + ",";
        }
        productNames = productNames.slice(0, -1);//removes last comma
        console.log("Products on the scale: " + productNames);
    }
}