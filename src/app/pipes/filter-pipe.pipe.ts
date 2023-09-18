import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../models/product';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: Products [], filterText:string): Products[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Products)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
