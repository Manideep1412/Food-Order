import { Foods } from "./food";

export class cartItem {
    price!: number;
    constructor(food:Foods){
        this.food=food;
        this.getPrice;
    }
    food: Foods;
    quanitity:number = 1;

    getPrice(): Number{
        return this.food.price * this.quanitity;
    }
}