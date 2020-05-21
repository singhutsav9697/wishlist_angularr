import { Component, OnInit } from '@angular/core';
import { Wishlist } from '../model/wishlist';
import { WishlistService } from '../services/wishlistservices';

@Component({
  selector: 'app-add-wisheditems',
  templateUrl: './add-wisheditems.component.html',
  styleUrls: ['./add-wisheditems.component.css']
})
export class AddWisheditemsComponent implements OnInit {

  service:WishlistService;
  
  constructor(service:WishlistService) {
    this.service=service;
   }

  ngOnInit(): void {
  }

   addedWish:Wishlist=null;
     
  addWisheditems(form:any){
    let details=form.value;
    let productId=details.productId;
    let productName=details.productName;
    this.addedWish=new Wishlist();
    this.addedWish.productId=productId;
    this.addedWish.productName=name;
    
    
    let result=this.service.addWisheditems(this.addedWish); // adding to the store
    result.subscribe((wishlist:Wishlist)=>{
      this.addedWish=wishlist;
    },
    err=>{
    console.log("err="+err);
    } );
    form.reset();
    
  }
 
}
