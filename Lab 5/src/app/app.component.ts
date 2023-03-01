import { Component } from '@angular/core';
import { category, categories } from '../app/categories';
import {update} from '../app/product-list/product-list.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
    display = false;
    categories = [...categories];
    show(){
        this.display = !this.display;
    }
    changeCategory(category: string){
      myCategory = category;
      update();
    }
}
var myCategory: String = '';
export { category,myCategory};
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/