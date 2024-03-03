import {Language} from "../constants/language";
export class LanguageUtil {
  currentLanguage: Language = new Language();

  getCurrentLanguageCode(): string {
      return this.currentLanguage.code;
  }

  getCurrentLanguageSuffix(): string {
    return this.currentLanguage.suffix;
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage;
  }

  getCurrentLanguageName(): string {
    return this.currentLanguage.getName();
  }
}
