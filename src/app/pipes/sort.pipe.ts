import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ValueTransformer } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<string>, args: any[]): any {
    const sortField = args[0];

    if(sortField === 'age') {
     value.sort((a:any, b:any) => {
       return a[sortField]-b[sortField];
     });
    }
    else
    {
    value.sort((a:any, b:any ) => {
      if(a[sortField].toUpperCase() < b[sortField].toUpperCase()) {
        return -1
      } else if (a[sortField].toUpperCase() > b[sortField].toUpperCase()){
        return 1;
      } else {
        return 0;
      }
    }
    );
  }
    return value;
}

}
