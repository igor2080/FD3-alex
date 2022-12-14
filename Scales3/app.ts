
interface IStorageEngine {
    addItem(item: Product): void;
    getItem(index: number): Product;
    getCount(): number;
}


class Product  {
    name: string;
    weight: number;

    constructor(_name: string, _weight: number) {
        this.name = _name;
        this.weight = _weight;
    }
    getScale(): number {
        return this.weight;
    }
    getName(): string {
        return this.name;
    }
}

class ScalesStorageEngineArray implements IStorageEngine {
    products: Array<Product> = [];

    addItem(item: Product): void {
        this.products.push(item);
    }
    getItem(index: number): Product {
        return this.products[index];
    }
    getCount(): number {
        return this.products.length;
    }
}

class ScalesStorageEngineLocalStorage implements IStorageEngine {
    itemCount: number = 0;

    addItem(item: Product): void {
        localStorage.setItem(this.itemCount.toString(), JSON.stringify(item));
        this.itemCount++;
    }
    getItem(index: number): Product {
        var item = JSON.parse(localStorage.getItem(index.toString())) as Product;
        return new Product(item.name,item.weight);///      
    }
    getCount(): number {
        return this.itemCount;
    }
}

class Scales<StorageEngine extends IStorageEngine> {
    storage: StorageEngine;

    constructor(storageEngine: StorageEngine) {
        this.storage = storageEngine;
    }

    add(product: Product): void {
        this.storage.addItem(product);
    }

    getSumScale(): number {
        let sumScale: number = 0;
        for (let i: number = 0; i < this.storage.getCount(); i++) {
            var item = this.storage.getItem(i);
            sumScale += item.getScale();
        }
        return sumScale;

    }

    getNameList(): Array<string> {
        let productNames: Array<string> = [];
        for (let i: number = 0; i < this.storage.getCount(); i++) {
            productNames.push(this.storage.getItem(i).getName());
        }
        return productNames;
    }
}

let arrayScale = new Scales<ScalesStorageEngineArray>(new ScalesStorageEngineArray());///

arrayScale.add(new Product("Tomato", 5));
arrayScale.add(new Product("Tomato", 6));
arrayScale.add(new Product("Tomato", 7));
arrayScale.add(new Product("Apple", 8));
arrayScale.add(new Product("Apple", 9));
arrayScale.add(new Product("Apple", 10));


console.log("Sum of all the products in array scale: " + arrayScale.getSumScale());

console.log("Names of all the products in array scale: " + arrayScale.getNameList());

let localStorageScale = new Scales<ScalesStorageEngineLocalStorage>(new ScalesStorageEngineLocalStorage());

localStorageScale.add(new Product("Tomato", 5));
localStorageScale.add(new Product("Tomato", 6));
localStorageScale.add(new Product("Tomato", 7));
localStorageScale.add(new Product("Apple", 8));
localStorageScale.add(new Product("Apple", 9));
localStorageScale.add(new Product("Apple", 10));


console.log("Sum of all the products in localstorage scale: " + localStorageScale.getSumScale());

console.log("Names of all the products in localstorage scale: " + localStorageScale.getNameList());