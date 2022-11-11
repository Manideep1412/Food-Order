import { Injectable } from '@angular/core';
import { Foods
 } from 'src/app/shared/model/food';
import { Tag } from 'src/app/shared/model/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id == id)!;
  }
  
  getAllFoodByTag(tag:string) :Foods[]{
    return tag == 'All'? 
    this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
    // if(tag == 'All')
    // return this.getAll()
    // else
    // return 
  }

  getAllTag():Tag[]{
    return[
      {name: 'Pizza', count:4},
      {name: 'All', count:12},
      {name: 'FastFood', count:6},
      {name: 'Dinner', count:1},
      {name: 'Lunch', count:7},
      {name: 'Veggie', count:1},
      {name: 'Supper', count:1},
      {name: 'BreakFast', count:1},
    ]
  }

  getAll():Foods[]{
    return [
    {
      id: 1,
      name: 'Pizza',
      cookTime: '10-20',
      price: 10,
      favourite: false,
      origins: ['italy'],
      star: 4.5,
      imageUrl: '/assets/images/foods/food-1.jpg',
      tags: ['FastFood', 'Dinner'],
    },
    {
      id: 2,
      name: 'Pizza +',
      cookTime: '15-25',
      price: 15,
      favourite: true,
      origins: ['canada'],
      star: 4.5,
      imageUrl: '/assets/images/foods/food-2.jpg',
      tags: ['FastFood', 'Lunch'],
    },{
      id: 13,
      name: 'Pizza 2',
      cookTime: '20-30',
      price: 12,
      favourite: false,
      origins: ['brazil'],
      star: 4.0,
      imageUrl: '/assets/images/foods/food-3.jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
    },
    {
      id: 3,
      name: 'Pizza +3',
      cookTime: '15-33',
      price: 15,
      favourite: true,
      origins: ['america'],
      star: 4.5,
      imageUrl: '/assets/images/foods/food-4.jpg',
      tags: ['FastFood', 'Pizza'],
    },
    {
      id: 5,
      name: 'Pizza',
      cookTime: '16-20',
      price: 10,
      favourite: true,
      origins: ['italy'],
      star: 4.5,
      imageUrl: '/assets/images/foods/food-5.jpg',
      tags: ['FastFood', 'Lunch'],
    },
    {
      id: 6,
      name: 'Pizza ++',
      cookTime: '15-25',
      price: 15,
      favourite: true,
      origins: ['canada'],
      star: 4.5,
      imageUrl: '/assets/images/foods/food-6.jpg',
      tags: [ 'Pizza', 'Lunch'],
    },{
      id: 7,
      name: 'Pizza 32',
      cookTime: '20-30',
      price: 12,
      favourite: true,
      origins: ['brazil'],
      star: 4.0,
      imageUrl: '/assets/images/foods/food-7.jpg',
      tags: ['Lunch'],
    },
    {
      id: 8,
      name: 'Pizza +8',
      cookTime: '15-33',
      price: 15,
      favourite: true,
      origins: ['america'],
      star: 2.5,
      imageUrl: '/assets/images/foods/food-8.jpg',
      tags: ['FastFood', 'Pizza'],
    },
    {
      id: 9,
      name: 'Pizza',
      cookTime: '10-20',
      price: 25,
      favourite: false,
      origins: ['italy'],
      star: 3.5,
      imageUrl: '/assets/images/foods/food-9.jpg',
      tags: ['Supper'],
    },
    {
      id: 10,
      name: 'Pizza +11',
      cookTime: '15-25',
      price: 15,
      favourite: true,
      origins: ['canada'],
      star: 4.5,
      imageUrl: '/assets/images/foods/food-10.jpg',
      tags: ['Lunch'],
    },{
      id: 11,
      name: 'Pizza 2',
      cookTime: '20-30',
      price: 12,
      favourite: false,
      origins: ['brazil'],
      star: 4.0,
      imageUrl: '/assets/images/foods/food-11.jpg',
      tags: ['BreakFast'],
    },
    {
      id: 12,
      name: 'Veggie +3',
      cookTime: '15-33',
      price: 20,
      favourite: true,
      origins: ['mexico'],
      star: 4.2,
      imageUrl: '/assets/images/foods/food-12.jpg',
      tags: ['Veggie', 'Lunch'],
    }
    ];
  }
}


