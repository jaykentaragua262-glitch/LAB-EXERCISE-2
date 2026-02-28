import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  price: number;
  stock: number;
  image: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: Product[] = [
    { name: 'iPhone 15 Pro', price: 69990, stock: 5,image: '/apple-iphone-15-pro-1.jpg'},
    { name: 'Samsung Galaxy S24', price: 55990, stock: 8,image: '/galaxy-s24-ultra-highlights-color-titanium-gray-back-mo.jpg' },
    { name: 'Google Pixel 8', price: 45990, stock: 6,image: '/google-pixel-8-smartphone-review_jnc5.jpg' },
    { name: 'Xiaomi 14', price: 39990, stock: 10,image: '/xiaomi-14-new.jpg' },
    { name: 'OnePlus 12', price: 42990, stock: 7,image: '/oneplus-12.jpg' },
    { name: 'Vivo X100', price: 37990, stock: 9,image: '/235fc4fbe0277e6fc5f25fc84fabdd7f.png' },
    { name: 'Oppo Find X6', price: 34990, stock: 4,image: '/vivo-X100-series-6.jpg' },
    { name: 'Realme GT 5', price: 28990, stock: 12,image: '/realme-gt5-150w.jpg' },
    { name: 'Huawei P60', price: 49990, stock: 3,image: '/black.png' },
    { name: 'Nothing Phone 2', price: 31990, stock: 6,image: '/Nothing-Phone-2.jpeg' }
  ];

  addToCart(product: Product) {
    if (product.stock > 0) {
      product.stock--;
      alert(`${product.name} added to cart! Remaining stock: ${product.stock}`);
    } else {
      alert(`${product.name} is out of stock!`);
    }
  }

  restock(product: Product) {
    product.stock++;
  }
}


