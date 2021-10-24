// class Product {
//     weight: number = 0;
//     name: string = "";
//     constructor(_name: string, _weight: number) {
//         this.name = _name;
//         this.weight = _weight;
//     }
//     getScale(): number {
//         return this.weight;
//     }
//     getName(): string {
//         return this.name;
//     }
// }
var Apple = /** @class */ (function () {
    function Apple(_weight) {
        this.name = "Apple";
        this.weight = _weight;
    }
    Apple.prototype.getScale = function () {
        return this.weight;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_weight) {
        this.name = "Tomato";
        this.weight = _weight;
    }
    Tomato.prototype.getScale = function () {
        return this.weight;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (product) {
        this.products.push(product);
    };
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        for (var i = 0; i < this.products.length; i++) {
            sumScale += this.products[i].getScale();
        }
        return sumScale;
    };
    Scales.prototype.getNameList = function () {
        var productNames = [];
        for (var i = 0; i < this.products.length; i++) {
            productNames.push(this.products[i].getName());
        }
        return productNames;
    };
    return Scales;
}());
var scale = new Scales();
scale.add(new Apple(5));
scale.add(new Apple(6));
scale.add(new Apple(7));
scale.add(new Tomato(5));
scale.add(new Tomato(6));
scale.add(new Tomato(7));
console.log("Sum of all the products: " + scale.getSumScale());
console.log(scale.getNameList());
//# sourceMappingURL=app.js.map