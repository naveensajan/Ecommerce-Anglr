import { Component, OnInit } from '@angular/core';
import { BnxCartService } from 'src/app/core/services/bnx-cart.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-bnx-cart',
  templateUrl: './bnx-cart.component.html',
  styleUrls: ['./bnx-cart.component.scss']
})
export class BnxCartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : BnxCartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any) {
  this.cartService.removeCartItem(item);
  Swal.fire({
    icon: 'success',
    title: 'Item removed',
    showConfirmButton: true,
    timer: 1500
  });
}
  emptycart(){
    this.cartService.removeAllCart();
  }

}
