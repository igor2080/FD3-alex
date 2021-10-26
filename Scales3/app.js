class Product {
    constructor(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    getScale() {
        return this.weight;
    }
    getName() {
        return this.name;
    }
}
class ScalesStorageEngineArray {
    constructor() {
        this.products = [];
    }
    addItem(item) {
        this.products.push(item);
    }
    getItem(index) {
        return this.products[index];
    }
    getCount() {
        return this.products.length;
    }
}
class ScalesStorageEngineLocalStorage {
    constructor() {
        this.itemCount = 0;
    }
    addItem(item) {
        localStorage.setItem(this.itemCount.toString(), JSON.stringify(item));
        this.itemCount++;
    }
    getItem(index) {
        var item = JSON.parse(localStorage.getItem(index.toString()));
        return new Product(item.name, item.weight); ///      
    }
    getCount() {
        return this.itemCount;
    }
}
class Scales {
    constructor(storageEngine) {
        this.storage = storageEngine;
    }
    add(product) {
        this.storage.addItem(product);
    }
    getSumScale() {
        let sumScale = 0;
        for (let i = 0; i < this.storage.getCount(); i++) {
            var item = this.storage.getItem(i);
            sumScale += item.getScale();
        }
        return sumScale;
    }
    getNameList() {
        let productNames = [];
        for (let i = 0; i < this.storage.getCount(); i++) {
            productNames.push(this.storage.getItem(i).getName());
        }
        return productNames;
    }
}
let arrayScale = new Scales(new ScalesStorageEngineArray()); ///
arrayScale.add(new Product("Tomato", 5));
arrayScale.add(new Product("Tomato", 6));
arrayScale.add(new Product("Tomato", 7));
arrayScale.add(new Product("Apple", 8));
arrayScale.add(new Product("Apple", 9));
arrayScale.add(new Product("Apple", 10));
console.log("Sum of all the products in array scale: " + arrayScale.getSumScale());
console.log("Names of all the products in array scale: " + arrayScale.getNameList());
let localStorageScale = new Scales(new ScalesStorageEngineLocalStorage());
localStorageScale.add(new Product("Tomato", 5));
localStorageScale.add(new Product("Tomato", 6));
localStorageScale.add(new Product("Tomato", 7));
localStorageScale.add(new Product("Apple", 8));
localStorageScale.add(new Product("Apple", 9));
localStorageScale.add(new Product("Apple", 10));
console.log("Sum of all the products in localstorage scale: " + localStorageScale.getSumScale());
console.log("Names of all the products in localstorage scale: " + localStorageScale.getNameList());
//# sourceMappingURL=app.js.map