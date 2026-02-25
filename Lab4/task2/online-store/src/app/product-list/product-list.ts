import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15',
      description: 'Latest iPhone with A16 Bionic chip. Features a 6.1-inch display and 48MP camera. Available in multiple colors.',
      price: 389990,
      rating: 4.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh09-g8OHP0AdkuFXhAty1P1AMhIKnPtygaw&s',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h4a/h49/84594946539550.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chyornyj-102747185/'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Flagship Samsung phone with AI features. Snapdragon 8 Gen 3 processor and 50MP camera. Stunning 6.2-inch AMOLED display.',
      price: 349990,
      rating: 4.7,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh09-g8OHP0AdkuFXhAty1P1AMhIKnPtygaw&s',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh09-g8OHP0AdkuFXhAty1P1AMhIKnPtygaw&s'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-8-256gb-chyornyj-106821985/'
    },
    {
      id: 3,
      name: 'MacBook Air M2',
      description: 'Ultra-thin laptop powered by Apple M2 chip. Up to 18 hours battery life and 13.6-inch Liquid Retina display. Perfect for students and professionals.',
      price: 699990,
      rating: 4.9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh09-g8OHP0AdkuFXhAty1P1AMhIKnPtygaw&s',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh09-g8OHP0AdkuFXhAty1P1AMhIKnPtygaw&s'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m2-8gb-256gb-serebrjanyj-103494948/'
    },
    {
      id: 4,
      name: 'Sony PlayStation 5',
      description: 'Next-gen gaming console with ultra-high speed SSD. Ray tracing and 4K gaming at up to 120fps. Includes DualSense wireless controller.',
      price: 299990,
      rating: 4.9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh09-g8OHP0AdkuFXhAty1P1AMhIKnPtygaw&s',
      images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh09-g8OHP0AdkuFXhAty1P1AMhIKnPtygaw&s'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-825gb-bely-j-101705394/'
    },
    {
      id: 5,
      name: 'Apple AirPods Pro 2',
      description: 'Premium wireless earbuds with Active Noise Cancellation. Adaptive Transparency mode and Personalized Spatial Audio. Up to 30 hours total battery.',
      price: 139990,
      rating: 4.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh09-g8OHP0AdkuFXhAty1P1AMhIKnPtygaw&s',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh09-g8OHP0AdkuFXhAty1P1AMhIKnPtygaw&s'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-bely-j-104693720/'
    },
    {
      id: 6,
      name: 'Samsung 55" QLED TV',
      description: 'Stunning 55-inch QLED display with 4K resolution. Smart TV with built-in streaming apps and voice control. Quantum HDR for vivid colors.',
      price: 259990,
      rating: 4.6,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh09-g8OHP0AdkuFXhAty1P1AMhIKnPtygaw&s',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh09-g8OHP0AdkuFXhAty1P1AMhIKnPtygaw&s'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-55-qe55q60bauxce-chyornyj-103760908/'
    },
    {
      id: 7,
      name: 'Dyson V15 Detect',
      description: 'Powerful cordless vacuum with laser dust detection. Up to 60 minutes runtime and HEPA filtration. Automatically adapts suction to floor type.',
      price: 249990,
      rating: 4.7,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh09-g8OHP0AdkuFXhAty1P1AMhIKnPtygaw&s',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh09-g8OHP0AdkuFXhAty1P1AMhIKnPtygaw&s'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-zhelytyj-104042442/'
    },
    {
      id: 8,
      name: 'iPad Air M1',
      description: 'Powerful tablet with Apple M1 chip and 10.9-inch Liquid Retina display. Supports Apple Pencil and Magic Keyboard. Available in 5G.',
      price: 319990,
      rating: 4.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh09-g8OHP0AdkuFXhAty1P1AMhIKnPtygaw&s',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh09-g8OHP0AdkuFXhAty1P1AMhIKnPtygaw&s'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-5-m1-64gb-wi-fi-serebrjanyj-102912791/'
    },
    {
      id: 9,
      name: 'Xiaomi Robot Vacuum S10',
      description: 'Smart robot vacuum with LiDAR navigation and 3000Pa suction. Auto-empties dustbin and mops floors. Works with Alexa and Google Home.',
      price: 119990,
      rating: 4.5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh09-g8OHP0AdkuFXhAty1P1AMhIKnPtygaw&s',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh09-g8OHP0AdkuFXhAty1P1AMhIKnPtygaw&s'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-s10-bely-j-105622637/'
    },
    {
      id: 10,
      name: 'Apple Watch Series 9',
      description: 'Advanced smartwatch with S9 chip and Double Tap gesture. Always-on Retina display and blood oxygen monitoring. Water resistant to 50 meters.',
      price: 179990,
      rating: 4.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh09-g8OHP0AdkuFXhAty1P1AMhIKnPtygaw&s',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh09-g8OHP0AdkuFXhAty1P1AMhIKnPtygaw&s'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-41mm-rozovyj-106835085/'
    }
  ];

  getStars(rating: number): string[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) stars.push('full');
      else if (i - rating < 1) stars.push('half');
      else stars.push('empty');
    }
    return stars;
  }

  getShareUrl(product: Product): string {
    const text = encodeURIComponent(`Check out this product: ${product.name} - ${product.link}`);
    return `https://wa.me/?text=${text}`;
  }
}