import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product';
import { ProductServiceService } from './product-service.service';
import { Http, Response } from '@angular/http';
//import {ObjectUtils} from '../utils/objectutils';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],


  providers: [ProductServiceService]
})
export class ProductListComponent implements OnInit {
  selectedCategoryId2: Number;
  products: Product[];



  selectedproduct: Product;
  displayDialog: boolean;
  //sortOptions: SelectItem[];
  sortKey: string;
  sortField: string;
  sortOrder: number;

  bannerList = [
    "./assets/images/products/banners/mobile_banner.jpg",
    "./assets/images/products/banners/women_banner.jpg",
    "./assets/images/products/banners/fashion_banner.jpg",
    "./assets/images/products/banners/kids_banner.jpg"
  ];

  banner: String;
  selectedCategory:Number;
  imagePath:String;
  //this.productServiceService
  constructor(public productServiceService: ProductServiceService, private http: Http, private activatedroute: ActivatedRoute, private router: Router ) {


    
      console.log(activatedroute.snapshot.params.id);

   }
  //this.productServiceService
  ngOnInit() {

    this.banner = './assets/images/products/banners/women_banner.jpg';

 
 
    // this.productServiceService.getProductsLarge().subscribe(products=>{
    //     this.products =products;
    // });

    // this.productServiceService.getProductsLarge().subscribe(res=>{
    //   this.products = res;
    //    console.log('sss'+this.products)
    // });

   // console.log(this.products)

  this.selectedCategory = this.activatedroute.snapshot.params['id'];

    this.productServiceService.getProducts(2).then(products => {


        this.products = products;


    });

  //console.log(this.selectedCategory);
  }

  selectProduct(event: Event, products: Product) {

    this.selectedproduct = products;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedproduct = null;
  }

  public doSomething(id: any): void {

    //console.log('Picked date: ', id);

    if (id == 1) {
      this.banner = './assets/images/products/banners/men_banner.jpg'
      this.imagePath  = 'assets/images/women';

    } else if (id == 2) {
      this.banner = './assets/images/products/banners/women_banner.jpg'
       this.imagePath  = 'assets/images/women';
    } else if (id == 3) {
      this.banner = './assets/images/products/banners/fashion_banner.jpg'
       this.imagePath  = 'assets/images/women';
    } else if (id == 4) {
      this.banner = './assets/images/products/banners/kids_banner.jpg'
       this.imagePath  = 'assets/images/kids';
    }
    
    this.productServiceService.getProducts(id).then(products => {


        this.products = products;


    });
  }


}
