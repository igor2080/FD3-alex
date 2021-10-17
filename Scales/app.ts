
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

    getSumScale(): void {
        let sumScale: number = 0;
        for (let i: number = 0; i < this.products.length; i++) {
            sumScale += this.products[i].getScale();
        }
        console.log("Sum of all the products: " + sumScale);
    }

    getNameList(): void {
        let productNames: string="";
        for (let i: number = 0; i < this.products.length; i++) {
            productNames += this.products[i].getName() + ",";
        }
        productNames = productNames.slice(0, -1);//removes last comma
        console.log("Products on the scale: " + productNames);
    }
}

let scale = new Scales();

scale.add(new Apple(5));
scale.add(new Apple(6));
scale.add(new Apple(7));

scale.add(new Tomato(5));
scale.add(new Tomato(6));
scale.add(new Tomato(7));

scale.getNameList();

scale.getSumScale();