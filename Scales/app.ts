import { Apple } from "./Apple";
import { Scales } from "./Scales";
import { Tomato } from "./Tomato";

let scale = new Scales();

scale.add(new Apple(5));
scale.add(new Apple(6));
scale.add(new Apple(7));

scale.add(new Tomato(5));
scale.add(new Tomato(6));
scale.add(new Tomato(7));

scale.getNameList();

scale.getSumScale();