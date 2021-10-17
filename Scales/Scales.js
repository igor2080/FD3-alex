"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scales = void 0;
var Scales = /** @class */ (function () {
    function Scales() {
    }
    Scales.prototype.add = function (product) {
        this.products.push(product);
    };
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        for (var i = 0; i < this.products.length; i++) {
            sumScale += this.products[i].getScale();
        }
        console.log("Sum of all the products: " + sumScale);
    };
    Scales.prototype.getNameList = function () {
        var productNames;
        for (var i = 0; i < this.products.length; i++) {
            productNames += this.products[i] + ",";
        }
        productNames = productNames.slice(0, -1); //removes last comma
        console.log("Products on the scale: " + productNames);
    };
    return Scales;
}());
exports.Scales = Scales;
//# sourceMappingURL=Scales.js.map