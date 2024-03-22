import { AbstractControl, ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  const regExp = new RegExp(
    `^[a-zA-Z0-9_.-]{2,}@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,}$`
  );

  return (control: AbstractControl) => {
    const isEmailInvalid = control.value === '' || regExp.test(control.value);
    return isEmailInvalid ? null : { emailValidator: true };
  };
}
