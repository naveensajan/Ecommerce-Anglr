import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BnxUserService } from 'src/app/core/services/bnx-user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bnx-signup',
  templateUrl: './bnx-signup.component.html',
  styleUrls: ['./bnx-signup.component.scss']
})
export class BnxSignupComponent {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: BnxUserService) {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]+$")]],
      address: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.userService.signup(this.signupForm.value).subscribe(
        (response) => {
          console.log('User registered successfully!', response);
          this.signupForm.reset();
          Swal.fire({
            icon: 'success',
            title: 'Signup Successful!',
            text: 'You have been successfully registered.'
          });
        },
        (error) => {
          console.error('Error registering user:', error);
          Swal.fire({
            icon: 'error',
            title: 'Signup Failed!',
            text: 'Error registering user. Please try again later.'
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error!',
        text: 'Please check the form fields and try again.'
      });
    }
  }
}
