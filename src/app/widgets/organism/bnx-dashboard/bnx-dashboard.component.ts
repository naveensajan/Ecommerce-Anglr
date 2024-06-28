import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bnx-dashboard',
  templateUrl: './bnx-dashboard.component.html',
  styleUrls: ['./bnx-dashboard.component.scss']
})
export class BnxDashboardComponent {
  showLoginAlert() {
    Swal.fire({
      title: 'Please Login',
      icon: 'warning',
      confirmButtonText: 'ok',
      timer: 10000 // Adjust the time in milliseconds (e.g., 5000 for 5 seconds)
    }).then((result) => {
      // You can add logic here to handle the user's response if needed
    });
  }
}
