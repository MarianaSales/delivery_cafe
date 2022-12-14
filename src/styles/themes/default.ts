export interface ThemeType {
    yellow_300: string;
    yellow_500: string;
    yellow_700: string;

    purple_300: string;
    purple_500: string;
    purple_700: string;

    white: string;

    grey_100: string;
    grey_200: string;
    grey_300: string;
    grey_400: string;
    grey_500: string;
    grey_600: string;
    grey_700: string;
    grey_800: string;
    grey_900: string;

    red_100: string;

    xl: string;
    l: string;
    m: string;
    s: string;
    xs: string;

    tag: string;
    button: string;
    button_s: string;
}

export const defaultTheme: ThemeType = {
    yellow_300: '#F1E9C9',
    yellow_500: '#DBAC2C',
    yellow_700: '#C47F17',

    purple_300: '#EBE5F9',
    purple_500: '#8047F8',
    purple_700: '#4B2995',

    white: '#FFFFFF',

    grey_100: '#FAFAFA',
    grey_200: '#F3F2F2',
    grey_300: '#EDEDED',
    grey_400: '#E8E5E5',
    grey_500: '#D7D5D5',
    grey_600: '#8D8686',
    grey_700: '#574F4D',
    grey_800: '#403937',
    grey_900: '#272221',

    red_100: '#f84747',

    xl: '3rem',
    l: '2rem',
    m: '1.5rem',
    s: '1.2rem',
    xs: '1.125px',

    tag: '0.625rem',
    button: '0.875rem',
    button_s: '0.75rem',
};
