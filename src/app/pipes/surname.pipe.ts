import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'surname',
})
export class SurnamePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const words = value.trim().split(' ');
    return words.length > 1 ? words[1] : '';
  }
}
