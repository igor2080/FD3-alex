export class Product {
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