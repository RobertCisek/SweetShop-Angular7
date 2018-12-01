import { ProductService } from './../../product.service';
import { Observable } from 'rxjs';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  categories$;

  constructor(
    private router: Router,
    private categoryService: CategoryService, 
    private ProductService: ProductService) { 
    this.categories$ = categoryService.getCategories();
  
  }

  save (product) {
    this.ProductService.create(product)
    this.router.navigate(['/admin/products'])
  }

  ngOnInit() {
  }

}
