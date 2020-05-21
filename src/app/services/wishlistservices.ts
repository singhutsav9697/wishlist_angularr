import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wishlist } from '../model/wishlist';

@Injectable()
export class WishlistService{

    client:HttpClient ;
    constructor(client:HttpClient ){
    this.client=client;
    }
    
    baseWishlistUrl="http://localhost:8088/wishlists";

    addWisheditems(wish:Wishlist): Observable<Wishlist>{
        let url=this.baseWishlistUrl+"/add";
        let result:Observable<Wishlist>= this.client.post<Wishlist>(url,wish);
        return result;
        }

        fetchAllWishlists():Observable<Wishlist[]>
  {
    let url=this.baseWishlistUrl;
    let observable:Observable<Wishlist[]> =this.client.get<Wishlist[]>(url);
    return observable;
  }
    }

