import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BnxUserService } from 'src/app/core/services/bnx-user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { BnxAuthService } from 'src/app/core/services/bnx-auth.service';

@Component({
  selector: 'app-bnx-login',
  templateUrl: './bnx-login.component.html',
  styleUrls: ['./bnx-login.component.scss']
})
export class BnxLoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder,
    private userService: BnxUserService,
    private router: Router,
    private authservice: BnxAuthService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.userService.login(email, password).subscribe(
        (users: any) => {
          const matchingUser = users.find((user: any) => user.email === email && user.password === password);
          if (matchingUser) {
            // Store user data in localStorage or session storage if needed
            localStorage.setItem('currentUser', JSON.stringify(matchingUser));
this.authservice.login();
            this.router.navigate(['/fullcomponent']);
          } else {
            this.errorMessage = 'Invalid email or password. Please try again.';
            Swal.fire({
              icon: 'error',
              title: 'Login Error',
              text: 'Invalid email or password. Please try again.'
            });
          }
        },
        (error: any) => { // Specify the type of the 'error' parameter
          console.error('Error authenticating user:', error);
          Swal.fire({
            icon: 'error',
            title: 'Login Error',
            text: 'Error authenticating user. Please try again later.'
          });
        }
      );
    }
  }
}