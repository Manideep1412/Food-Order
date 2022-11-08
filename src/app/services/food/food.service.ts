import { Injectable } from '@angular/core';
import { Foods
 } from 'src/app/shared/model/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

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
      tags: ['FastFood', 'Pizza', 'Lunch'],
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
      tags: ['FastFood', 'Pizza +', 'Lunch'],
    },{
      id: 1,
      name: 'Pizza 2',
      cookTime: '20-30',
      price: 12,
      favourite: false,
      origins: ['brazil'],
      star: 4.0,
      imageUrl: '/assets/images/foods/food-3.jpg',
      tags: ['FastFood', 'Pizza 2', 'Lunch'],
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
      tags: ['FastFood', 'Pizza +3', 'Lunch'],
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
      tags: ['FastFood', 'Pizza', 'Lunch'],
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
      tags: ['FastFood', 'Pizza +', 'Lunch'],
    },{
      id: 7,
      name: 'Pizza 32',
      cookTime: '20-30',
      price: 12,
      favourite: true,
      origins: ['brazil'],
      star: 4.0,
      imageUrl: '/assets/images/foods/food-7.jpg',
      tags: ['FastFood', 'Pizza 2', 'Lunch'],
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
      tags: ['FastFood', 'Pizza +3', 'Lunch'],
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
      tags: ['FastFood', 'Pizza'],
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
      tags: ['FastFood', 'Pizza +', 'Lunch'],
    },{
      id: 11,
      name: 'Pizza 2',
      cookTime: '20-30',
      price: 12,
      favourite: false,
      origins: ['brazil'],
      star: 4.0,
      imageUrl: '/assets/images/foods/food-11.jpg',
      tags: ['FastFood', 'Pizza 2', 'Lunch'],
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
      tags: ['FastFood', 'Veggie +3', 'Lunch'],
    }
    ];
  }
}


