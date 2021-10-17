"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Apple_1 = require("./Apple");
var Scales_1 = require("./Scales");
var Tomato_1 = require("./Tomato");
var scale = new Scales_1.Scales();
scale.add(new Apple_1.Apple(5));
scale.add(new Apple_1.Apple(6));
scale.add(new Apple_1.Apple(7));
scale.add(new Tomato_1.Tomato(5));
scale.add(new Tomato_1.Tomato(6));
scale.add(new Tomato_1.Tomato(7));
scale.getNameList();
scale.getSumScale();
//# sourceMappingURL=app.js.map