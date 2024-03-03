import {enums} from "./enums";

export class Language {
  code: string;
  suffix: string;
  nameKK:string;
  nameRU:string;
  nameEN:string;

  constructor() {
    this.code = localStorage.getItem('Current-Language') ?? 'ru';
    this.suffix = this.code.toUpperCase();
    this.nameKK = enums.LANGUAGES[this.code].nameKK;
    this.nameRU = enums.LANGUAGES[this.code].nameRU;
    this.nameEN = enums.LANGUAGES[this.code].nameEN;
  }

  getName(): string {
    let names:any = {
      KK: this.nameKK,
      RU: this.nameRU,
      EN: this.nameEN
    };
    return names[this.suffix];
  }
}
