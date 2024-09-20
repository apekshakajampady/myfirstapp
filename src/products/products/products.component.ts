import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { error } from 'console';
import { ProductserviceService } from 'src/productservice/productservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private _product:ProductserviceService) {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      productName: new FormControl(null),
      productPrice: new FormControl(null),
    });
  }
  myProducts: { productName: string; productPrice: string }[] = [];

  onPushData() {
    const productName = this.productForm.get('productName')?.value;
    const productPrice = this.productForm.get('productPrice')?.value;
    if (productName && productPrice) {
      this.myProducts.push({
        productName: productName,
        productPrice: productPrice,
      });
    }
    console.log('Data Submitted', this.myProducts);
    console.log(productName,productPrice);
    this._product.saveProduct(this.myProducts)
    .subscribe(sub =>{
      console.log(sub)
      
    },error=>{
      console.log(error)
      
    })
    
  }
}
