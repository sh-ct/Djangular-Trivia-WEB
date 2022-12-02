import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ASCIIConverter'
})
export class ASCIIConverterPipe implements PipeTransform {
  constructor() {
  }
  transform(value: any, args?: any): any {
    return decodeURIComponent(JSON.parse('"' + value.replace('&#039;', "'") + '"'));
  }
}
