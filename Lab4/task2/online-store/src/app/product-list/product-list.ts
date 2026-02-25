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
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-nanosim-esim-goluboi-113137929/?c=750000000'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Flagship Samsung phone with AI features. Snapdragon 8 Gen 3 processor and 50MP camera. Stunning 6.2-inch AMOLED display.',
      price: 349990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p41/pda/1306250.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p41/pda/1306250.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-256-gb-zelenyi-128142993/?c=750000000'
    },
    {
      id: 3,
      name: 'MacBook Air M2',
      description: 'Ultra-thin laptop powered by Apple M2 chip. Up to 18 hours battery life and 13.6-inch Liquid Retina display. Perfect for students and professionals.',
      price: 699990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000'
    },
    {
      id: 4,
      name: 'Sony PlayStation 5',
      description: 'Next-gen gaming console with ultra-high speed SSD. Ray tracing and 4K gaming at up to 120fps. Includes DualSense wireless controller.',
      price: 299990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
    },
    {
      id: 5,
      name: 'Apple AirPods Pro 2',
      description: 'Premium wireless earbuds with Active Noise Cancellation. Adaptive Transparency mode and Personalized Spatial Audio. Up to 30 hours total battery.',
      price: 139990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p89/pc5/64466278.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p89/pc5/64466278.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-3-belyi-145554533/?c=750000000'
    },
    {
      id: 6,
      name: 'Samsung 55" QLED TV',
      description: 'Stunning 55-inch QLED display with 4K resolution. Smart TV with built-in streaming apps and voice control. Quantum HDR for vivid colors.',
      price: 259990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7b/hc2/86493595172894.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7b/hc2/86493595172894.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/jandeks-pro-qled-yndx-00101-140-sm-chernyi-121225833/?c=750000000'
    },
    {
      id: 7,
      name: 'Dyson V15 Detect',
      description: 'Powerful cordless vacuum with laser dust detection. Up to 60 minutes runtime and HEPA filtration. Automatically adapts suction to floor type.',
      price: 249990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa4/p32/77965055.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa4/p32/77965055.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-sv47-serebristyi-113691132/?c=750000000'
    },
    {
      id: 8,
      name: 'iPad Air M1',
      description: 'Powerful tablet with Apple M1 chip and 10.9-inch Liquid Retina display. Supports Apple Pencil and Magic Keyboard. Available in 5G.',
      price: 319990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-seryi-137965083/?c=750000000'
    },
    {
      id: 9,
      name: 'Xiaomi Robot Vacuum S10',
      description: 'Smart robot vacuum with LiDAR navigation and 3000Pa suction. Auto-empties dustbin and mops floors. Works with Alexa and Google Home.',
      price: 119990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he9/h71/85879011311646.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/he9/h71/85879011311646.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-e5-belyi-118878244/?c=750000000'
    },
    {
      id: 10,
      name: 'Apple Watch Series 9',
      description: 'Advanced smartwatch with S9 chip and Double Tap gesture. Always-on Retina display and blood oxygen monitoring. Water resistant to 50 meters.',
      price: 179990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-sinii-chernyi-113398437/?c=750000000'
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


filterRating: number | null = null;

get filteredProducts(): Product[] {
  if (this.filterRating !== null) {
    return this.products.filter(p => p.rating >= this.filterRating!);
  }
  return this.products;
}

}