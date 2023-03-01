import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product, products } from '../products';
import {myCategory} from 'src/app/app.component'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];
  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  getCategory(){
    return category;
  }
  getFiltered(){
    return this.products.filter(c => c.category === category);
  }
  remove(id: number){
    this.products = this.products.filter(c => c.id != id);
  }
}
var category: String = 'all';
function update(){
    category = myCategory;
     var container = document.getElementById("products");
      if(container != null){
          var content = container.innerHTML;
          container.innerHTML= content; 
      }
}
export{update,category};
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
