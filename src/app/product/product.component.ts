import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-data.service';
import { Product } from './product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : Array<Product>=[];

  constructor(private product: ProductService) {}


  ngOnInit(): void {
    this.product.getProducts().subscribe((data: any[]) => {
      this.products = (data as any).products; 
    });
  }
}

  

