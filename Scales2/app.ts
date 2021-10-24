interface IScaleable {
    weight: number;
    name: string;
    getScale(): number;
    getName(): string;
}

class Apple implements IScaleable {
    name: string = "Apple";
    weight: number;

    constructor(_weight: number) {
        this.weight = _weight;
    }
    getScale(): number {
        return this.weight;
    }
    getName(): string {
        return this.name;
    }
}

class Tomato implements IScaleable {

    name: string = "Tomato";
    weight: number;

    constructor(_weight: number) {
        this.weight = _weight;
    }
    getScale(): number {
        return this.weight;
    }
    getName(): string {
        return this.name;
    }
}

class Scales {
    products: IScaleable[] = [];

    add(product: IScaleable): void {
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