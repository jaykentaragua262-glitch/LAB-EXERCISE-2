import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  price: number;
  stock: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  products: Product[] = [
    { name: 'iPhone 15 Pro', price: 69990, stock: 5 },
    { name: 'Samsung Galaxy S24', price: 55990, stock: 8 },
    { name: 'Google Pixel 8', price: 45990, stock: 6 },
    { name: 'Xiaomi 14', price: 39990, stock: 10 },
    { name: 'OnePlus 12', price: 42990, stock: 7 },
    { name: 'Vivo X100', price: 37990, stock: 9 },
    { name: 'Oppo Find X6', price: 34990, stock: 4 },
    { name: 'Realme GT 5', price: 28990, stock: 12 },
    { name: 'Huawei P60', price: 49990, stock: 3 },
    { name: 'Nothing Phone 2', price: 31990, stock: 6 }
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


