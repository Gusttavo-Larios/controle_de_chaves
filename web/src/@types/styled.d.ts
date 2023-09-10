// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    COLORS: {
      BLACK_600: string;
      BLUE_300: string;
      GREEN_300: string;
      GREEN_400: string;
      GRAY_300: string;
      GRAY_500: string;
      RED_100: string;
      WHITE_100: string;
      WHITE_200: string;
      YELLOW_400: string;
    };
    TEXTS: {
      H1: {
        fontFamily: string;
        fontSize: string;
        fontStyle: string;
        fontWeight: number;
        lineHeight: string;
        color: string;
      };
      H2: {
        fontFamily: string;
        fontSize: string;
        fontStyle: string;
        fontWeight: number;
        lineHeight: string;
        color: string;
      };
      LABEL: {
        fontFamily: string;
        fontSize: string;
        fontStyle: string;
        fontWeight: number;
        lineHeight: string;
        color: string;
      };
      PLACEHOLDER: {
        fontFamily: string;
        fontSize: string;
        fontStyle: string;
        fontWeight: number;
        lineHeight: string;
        color: string;
      };
      TEXT_SMALL: {
        fontFamily: string;
        fontSize: string;
        fontStyle: string;
        fontWeight: number;
        lineHeight: string;
        color: string;
      };
      TEXT_MEDIUM: {
        fontFamily: string;
        fontSize: string;
        fontStyle: string;
        fontWeight: number;
        lineHeight: string;
        color: string;
      };
      BUTTON_TEXT: {
        fontFamily: string;
        fontSize: string;
        fontStyle: string;
        fontWeight: number;
        lineHeight: string;
      };
    };
  }
}
