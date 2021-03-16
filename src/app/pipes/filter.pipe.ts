import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

/*
  * @param value bejovo adatkent kapja meg a filter
  * @param phrase szurokifejezes
  * @param key  mely oszlop alapjan akarok szurni
  */
transform(value: any[], phrase: string, key: string = ''): any[] {
  if ( !Array.isArray(value) || !phrase || !key ) {
    return value;
  }

  /* stringe alakitom a szurokifejezest */
  phrase = typeof phrase !== 'number' ? ('' + phrase).toLowerCase() : phrase;
  return value.filter((item) => {
    if (typeof item[key] === 'number' && typeof phrase === 'number') {
      return item[key] === phrase;
    }
    return ('' + item[key]).localeCompare((phrase as string));
  });
}
}
