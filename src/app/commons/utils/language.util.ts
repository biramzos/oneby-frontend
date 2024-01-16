import { enums } from "../constants/enums";

class Language {
    code: string;
    nameKZ:string;
    nameRU:string;
    nameEN:string;

    constructor() {
        this.code = localStorage.getItem('Accept-Language') ?? 'en';
        this.nameKZ = enums.LANGUAGES[this.code].nameKZ;
        this.nameRU = enums.LANGUAGES[this.code].nameRU;
        this.nameEN = enums.LANGUAGES[this.code].nameEN;
    }
}

export class LanguageUtil {
    currentLanguage:Language = new Language();

    getCurrentLanguage() {
        return this.currentLanguage.code;
    }
}