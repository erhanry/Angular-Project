import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const { currencyDefault } = environment;

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  private toFixed(price: number): string {
    return price.toFixed(2);
  }

  private replace(val: string): string {
    return val.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  transform(value: number, ...args: string[]): string {
    let result: string = '';

    if (!value) {
      return result;
    }

    if (args.includes('USD')) {
      const priceStr = this.replace(this.toFixed(value * 0.553157));
      return result.concat('$', priceStr);
    }

    if (args.includes('EUR')) {
      const priceStr = this.replace(this.toFixed(value * 0.51129188));
      return result.concat('€', priceStr);
    }

    if (args.includes('BGN') || args.includes(currencyDefault)) {
      const priceStr = this.toFixed(value);
      return result.concat('', priceStr, ' лв.');
    }

    return result;
  }
}
