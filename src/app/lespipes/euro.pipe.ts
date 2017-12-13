import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euro'
})
export class EuroPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = value + value[0];
    return value.substring(1);
  }
}
