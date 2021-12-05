import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'colorFilter',
    pure: false
})
export class ColorFilter implements PipeTransform {
    transform(items: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.title.indexOf(filter.color) !== -1);
    }
}