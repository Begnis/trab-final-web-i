import { Component } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItem, NgFor],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  products = [
    {
      id: 1,
      name: 'Controle para Xbox360',
      price: 129.90,
      imageUrl: "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg"
    },
    {
      id: 2,
      name: 'Drone',
      price: 200.00,
      imageUrl: "https://images.pexels.com/photos/1626637/pexels-photo-1626637.jpeg"
    },
    {
      id: 3,
      name: 'Apoio para celular',
      price: 30.00,
      imageUrl: "https://images.pexels.com/photos/4065906/pexels-photo-4065906.jpeg"
    }
  ];
}
  

