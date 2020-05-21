import { Component, OnInit } from '@angular/core';
import { Wishlist } from '../model/wishlist';
import { WishlistService } from '../services/wishlistservices';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-wisheditems',
  templateUrl: './list-wisheditems.component.html',
  styleUrls: ['./list-wisheditems.component.css']
})
export class ListWisheditemsComponent implements OnInit {

  wishlist:Wishlist[]=[];

  service:WishlistService;

  orderByField:string=null;


  constructor(service:WishlistService) {
  this.service=service;
  let observable:Observable<Wishlist[]>=this.service.fetchAllWishlists();
  observable.subscribe(
    wish=>{
      this.wishlist=wish;
     console.log("inside success callback ="+this.wishlist.length);
    },
    err=>console.log(err)
    );
  }

  ngOnInit(): void {
  }
}
