import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../validators/email-validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, emailValidator()]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  get isEmaildValid() {
    const field = this.loginForm.get('email');

    const Obj = { touched: false, required: false, isMatch: false, css: false };

    if (field?.touched) {
      Obj.touched = true;
      Obj.required = !!field?.errors?.['required'];
      Obj.isMatch = !!field?.errors?.['emailValidator'];
      Obj.css = Obj.required || Obj.isMatch;
    }

    return Obj;
  }

  get isPasswordValid() {
    const field = this.loginForm.get('password');

    const Obj = {
      touched: false,
      required: false,
      minLength: false,
      css: false,
    };

    if (field?.touched) {
      Obj.touched = true;
      Obj.required = !!field?.errors?.['required'];
      Obj.minLength = !!field?.errors?.['minlength'];
      Obj.css = Obj.required || Obj.minLength;
    }

    return Obj;
  }

  loginHandler() {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    this.userService.login(email!, password!).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}
