import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appImageValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ImageDirective,
      multi: true,
    },
  ],
})
export class ImageDirective implements Validator {
  @Input() appImage: string[] = [];

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const regExp = /^https?:\/\/.*\/.*\.(png|jpeg|jpg)$/i;
    const valid = regExp.test(control.value);
    return valid ? null : { invalidImgUrl: true };
  }
}
