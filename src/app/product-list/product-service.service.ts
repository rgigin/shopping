import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Product} from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: Http) { }

   getProducts(id) {
        // return this.http.get('/assets/data/mensfashion.json')
        //             .toPromise()
        //             .then(res => <Product[]> res.json().data)
        //             .then(data => { return data; });
        let url;

        if(id==1){

            url='./../assets/data/mensfashion.json';
        }else if(id==2){
            url='./../assets/data/womensfashion.json';

        }else if(id==3){
            url='./../assets/data/fashion.json';

        } else {
            url='./../assets/data/kidsfashion.json';
        }

        return this.http.get(url).toPromise()
                    .then(res => <Product[]> res.json().data)
                 .then(data => { return data; });
        
  
   }    
}
