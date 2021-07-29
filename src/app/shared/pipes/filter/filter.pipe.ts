import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(array: {}[], searchText: string, searchBy: string[]): {}[] {
        if (!searchText) {
            return array;
        }
        return array.filter((item) => this.matchValue(item, searchText, searchBy));
    }

    private matchValue(
        data: {},
        searchText: string,
        searchBy: string[]
    ): boolean {
        return Object.keys(data)
            .map((key) => {
              if (typeof (data as any)[key] === 'object') {
                return searchBy.find((searchKey: string) => searchKey === key)
                  ? this.matchValue((data as any)[key], searchText, searchBy)
                  : false;
              }
              return searchBy.find((searchKey: string) => searchKey === key)
                ? new RegExp(searchText, 'gi').test((data as any)[key])
                : false;
            })
            .some((result) => result);
    }
}
