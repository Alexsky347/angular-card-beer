import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'getBeerProperty',
  standalone: true
})
export class GetBeerPropertyPipe implements PipeTransform {
  transform(item: any, header: string): any {
    if (!item) return;
    if (Object.hasOwn(item, header)) {
      return item[header];
    }
  }
}
