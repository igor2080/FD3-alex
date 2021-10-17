
class Product {
    weight: number = 0;
    name: string = "";

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

class Apple extends Product {

    constructor(_weight: number) {
        super("Apple", _weight);
    }
}

class Tomato extends Product {

    constructor(_weight: number) {
        super("Tomato", _weight);
    }
}

class Scales {
    products: Product[] = [];

    add(product: Product): void {
        this.products.push(product);
    }

    getSumScale(): number {
        let sumScale: number = 0;
        for (let i: number = 0; i < this.products.length; i++) {
            sumScale += this.products[i].getScale();
        }
        return sumScale;

    }

    getNameList(): Array<string> {
        let productNames: Array<string> = [];
        for (let i: number = 0; i < this.products.length; i++) {
            productNames.push(this.products[i].getName());
        }
        return productNames;
    }
}

let scale = new Scales();

scale.add(new Apple(5));
scale.add(new Apple(6));
scale.add(new Apple(7));

scale.add(new Tomato(5));
scale.add(new Tomato(6));
scale.add(new Tomato(7));

console.log("Sum of all the products: " + scale.getSumScale());

console.log(scale.getNameList());