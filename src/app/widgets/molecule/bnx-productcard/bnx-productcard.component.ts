import { Component, OnInit, Input } from '@angular/core';
import { BnxApiService } from 'src/app/core/services/bnx-api.service';
import { BnxCartService } from 'src/app/core/services/bnx-cart.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-bnx-productcard',
  templateUrl: './bnx-productcard.component.html',
  styleUrls: ['./bnx-productcard.component.scss']
})
export class BnxProductcardComponent implements OnInit  {

  public productList: any;
  public filterCategory: any;
  searchKey: string = "";

  constructor(private api: BnxApiService, private cartService: BnxCartService) { }

  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(res => {
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a: any) => {
          if (a.category === "women's clothing" || a.category === "men's clothing") {
            a.category = "fashion";
          }
          Object.assign(a, { quantity: 1, total: a.price });
        });
        console.log(this.productList);
      });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
    // Display Sweet Alert message when item is added to cart
    Swal.fire({
      icon: 'success',
      title: 'Item added to cart',
      showConfirmButton: true,
      timer: 800
    });
  }

  filter(category: string) {
    this.filterCategory = this.productList
      .filter((a: any) => {
        if (a.category == category || category == '') {
          return a;
        }
      });
  }
}
