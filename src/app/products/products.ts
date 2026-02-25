import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  price: number;
  stock: number;
}

@Component({
  selector: 'app-products',
  standalone: true,          // required for standalone components
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  // Initial product list
  PRODUCTS: Product[] = [
  { name: 'iPhone 15 Pro', price: 69990, stock: 5, image: 'assets/images/iphone15.jpg' },
  { name: 'Samsung Galaxy S24', price: 55990, stock: 8, image: 'assets/images/samsungS24.jpg' },
  { name: 'Google Pixel 8', price: 45990, stock: 6, image: 'assets/images/pixel8.jpg' },
  { name: 'Xiaomi 14', price: 39990, stock: 10, image: 'assets/images/xiaomi14.jpg' },
  { name: 'OnePlus 12', price: 42990, stock: 7, image: 'assets/images/oneplus12.jpg' },
  { name: 'Vivo X100', price: 37990, stock: 9, image: 'assets/images/vivoX100.jpg' },
  { name: 'Oppo Find X6', price: 34990, stock: 4, image: 'assets/images/oppoX6.jpg' },
  { name: 'Realme GT 5', price: 28990, stock: 12, image: 'assets/images/realmeGT5.jpg' },
  { name: 'Huawei P60', price: 49990, stock: 3, image: 'assets/images/huaweiP60.jpg' },
  { name: 'Nothing Phone 2', price: 31990, stock: 6, image: 'assets/images/nothing2.jpg' },
];

  // Use PRODUCTS as the main products array
  products: Product[] = this.PRODUCTS;

  // Add to cart decreases stock
  addToCart(product: Product) {
    if (product.stock > 0) {
      product.stock--;
      alert(`${product.name} added to cart! Remaining stock: ${product.stock}`);
    } else {
      alert(`${product.name} is out of stock!`);
    }
  }

  // Restock increases stock
  restock(product: Product) {
    product.stock++;
  }
}


