import { LocalizedSimpleObject, LocalizedSimpleStringObject, SimpleObject } from "../dtos/simple-object.dto";

export const enums:any = {
    LANGUAGES: {
        kz: new LocalizedSimpleStringObject('kz', '', '', 'Kazakh'),
        ru: new LocalizedSimpleStringObject('ru', '', '', 'Russian'),
        en: new LocalizedSimpleStringObject('en', '', '', 'English')
    },
    MONTHS: {
        JANUARY: new LocalizedSimpleStringObject('JANUARY', '', '', ''),
        FEBRUARY: new LocalizedSimpleStringObject('FEBRUARY', '', '', ''),
        MARCH: new LocalizedSimpleStringObject('MARCH', '', '', ''),
        APRIL: new LocalizedSimpleStringObject('APRIL', '', '', ''),
        MAY: new LocalizedSimpleStringObject('MAY', '', '', ''),
        JUNE: new LocalizedSimpleStringObject('JUNE', '', '', ''),
        JULY: new LocalizedSimpleStringObject('JULY', '', '', ''),
        AUGUST: new LocalizedSimpleStringObject('AUGUST', '', '', ''),
        SEPTEMBER: new LocalizedSimpleStringObject('SEPTEMBER', '', '', ''),
        OCTOBER: new LocalizedSimpleStringObject('OCTOBER', '', '', ''),
        NOVEMBER: new LocalizedSimpleStringObject('NOVEMBER', '', '', ''),
        DECEMBER: new LocalizedSimpleStringObject('DECEMBER', '', '', '')
    },
    ROLES: {
        ADMIN: new LocalizedSimpleStringObject('ADMIN', '', '', 'Admin'),
        PREMIUM: new LocalizedSimpleStringObject('PREMIUM', '', '', 'Premium'),
        USER: new LocalizedSimpleStringObject('USER', '', '', 'User')
    },
    ACCESS_BOOK: {
        PUBLIC: new LocalizedSimpleStringObject('PUBLIC', '', '', 'Public'),
        PRIVATE: new LocalizedSimpleStringObject('PRIVATE', '', '', 'Private')
    },
    GENRES: {
        FANTASY: new LocalizedSimpleStringObject('FANTASY', '', '', ''),
        SCIENCE_FICTION: new LocalizedSimpleStringObject('SCIENCE_FICTION', '', '', ''),
        REALISM: new LocalizedSimpleStringObject('REALISM', '', '', ''),
        ROMANCE: new LocalizedSimpleStringObject('ROMANCE', '', '', ''),
        DETECTIVE: new LocalizedSimpleStringObject('DETECTIVE', '', '', ''),
        THRILLER: new LocalizedSimpleStringObject('THRILLER', '', '', ''),
        HORROR: new LocalizedSimpleStringObject('HORROR', '', '', ''),
        ADVENTURE: new LocalizedSimpleStringObject('ADVENTURE', '', '', ''),
        HISTORICAL_FICTION: new LocalizedSimpleStringObject('HISTORICAL_FICTION', '', '', ''),
        PHILOSOPHY: new LocalizedSimpleStringObject('PHILOSOPHY', '', '', ''),
        PSYCHOLOGY: new LocalizedSimpleStringObject('PSYCHOLOGY', '', '', ''),
        BIOGRAPHY: new LocalizedSimpleStringObject('BIOGRAPHY', '', '', ''),
        HUMOR: new LocalizedSimpleStringObject('HUMOR', '', '', ''),
        DRAMA: new LocalizedSimpleStringObject('DRAMA', '', '', ''),
        POETRY: new LocalizedSimpleStringObject('POETRY', '', '', ''),
        EDUCATIONAL: new LocalizedSimpleStringObject('EDUCATIONAL', '', '', ''),
        OTHER: new LocalizedSimpleStringObject('OTHER', '', '', ''),
    }
};