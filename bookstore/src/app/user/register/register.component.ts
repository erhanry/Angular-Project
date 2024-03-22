import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { matchPasswordsValidator } from '../validators/match-passwords-validator';
import { emailValidator } from '../validators/email-validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  registerForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, emailValidator()]],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      },
      {
        validators: [matchPasswordsValidator('password', 'confirmPassword')],
      }
    ),
  });

  get isFirstNameValid() {
    const field = this.registerForm.get('firstName');

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

  get isLastNameValid() {
    const field = this.registerForm.get('lastName');

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

  get isPassGroupdValid() {
    const passGroup = this.registerForm.get('passGroup');
    const fieldPass = passGroup?.get('password');
    const fieldRePass = passGroup?.get('confirmPassword');

    const Obj = {
      touched: false,
      requiredPass: false,
      requiredRePass: false,
      minLength: false,
      isMatch: false,
      cssPass: false,
      cssRePass: false,
    };

    if (passGroup?.touched) {
      Obj.touched = true;
      Obj.requiredPass = !!fieldPass?.errors?.['required'];
      Obj.minLength = !!fieldPass?.errors?.['minlength'];
      Obj.cssPass = Obj.requiredPass || Obj.minLength;
      Obj.requiredRePass =
        !!fieldRePass?.errors?.['required'] && !Obj.requiredPass;
      Obj.isMatch =
        !!passGroup?.errors?.['matchPasswordsValidator'] && !Obj.requiredRePass;
      Obj.cssRePass = Obj.requiredRePass || Obj.isMatch;
    }

    return Obj;
  }

  get isEmaildValid() {
    const field = this.registerForm.get('email');

    const Obj = { touched: false, required: false, isMatch: false, css: false };

    if (field?.touched) {
      Obj.touched = true;
      Obj.required = !!field?.errors?.['required'];
      Obj.isMatch = !!field?.errors?.['emailValidator'];
      Obj.css = Obj.required || Obj.isMatch;
    }

    return Obj;
  }

  registerHandler() {
    if (this.registerForm.invalid) {
      return;
    }
    const {
      firstName,
      lastName,
      email,
      passGroup: { password, confirmPassword } = {},
    } = this.registerForm.value;

    this.userService
      .register(firstName!, lastName!, email!, password!, confirmPassword!)
      .subscribe(() => {
        this.router.navigate(['/books']);
      });
  }
}
