import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name',
})
export class NamePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const words = value.trim().split(' ');
    return words[0];
  }
}
