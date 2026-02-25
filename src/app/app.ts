import { Component, signal } from '@angular/core';
import { ProductsComponent } from './products/products';

@Component({
  selector: 'app-root',
  imports: [ProductsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aragua');
} 