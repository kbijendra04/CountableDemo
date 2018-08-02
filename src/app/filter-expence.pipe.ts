import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterExpence'
})
export class FilterExpencePipe implements PipeTransform {

  transform(value: any[], desc: string): any[] {
      
    if(!value) return [];
    if(!desc) return value;

    desc=desc.toLowerCase();  

    return value.filter(function(item){       
      return JSON.stringify(item).toLowerCase().includes(desc);
  });
  }

}
