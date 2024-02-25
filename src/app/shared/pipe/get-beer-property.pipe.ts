import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'getBeerProperty',
  standalone: true
})
export class GetBeerPropertyPipe implements PipeTransform {
  transform<T>(item: T, header: keyof T): T[keyof T] | undefined {
    if (!item) return;
    if (Object.hasOwn(item, header)) {
      return item[header] as T[keyof T];
    }
    return undefined;
  }
}
