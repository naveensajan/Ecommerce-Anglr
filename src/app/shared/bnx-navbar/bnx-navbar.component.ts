import { Component, OnInit  } from '@angular/core';
import { BnxAuthService } from 'src/app/core/services/bnx-auth.service';
import { BnxCartService } from 'src/app/core/services/bnx-cart.service';
import { BnxUserService } from 'src/app/core/services/bnx-user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bnx-navbar',
  templateUrl: './bnx-navbar.component.html',
  styleUrls: ['./bnx-navbar.component.scss']
})
export class BnxNavbarComponent implements OnInit {

  public totalItem : number = 0;
  public searchTerm !: string;
  public currentUser: any;
  
  constructor(private cartService : BnxCartService,private userService: BnxUserService,private authService: BnxAuthService,private router: Router) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  logout(): void {    
       localStorage.removeItem('loggedInUser');
       localStorage.removeItem('token');  
       this.authService.logout(); 
       this.router.navigate(['dashboard']);
     }
}
