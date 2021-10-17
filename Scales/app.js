var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(_name, _weight) {
        this.weight = 0;
        this.name = "";
        this.name = _name;
        this.weight = _weight;
    }
    Product.prototype.getScale = function () {
        return this.weight;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_weight) {
        return _super.call(this, "Apple", _weight) || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_weight) {
        return _super.call(this, "Tomato", _weight) || this;
    }
    return Tomato;
}(Product));
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