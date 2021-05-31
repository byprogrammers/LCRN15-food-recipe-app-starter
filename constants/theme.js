import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    darkGreen: "#229879",
    darkLime: "#1A8871",
    lightLime: "#BBD6C5",
    lime: "#2AD699",
    lightGreen: "#E7F9EF",
    lightGreen1: "#8EbCA0",

    white: "#fff",
    white2: '#F9F9F9',
    black: "#020202",
    blue: "#4096FE",
    gray: "#777777",
    gray2: '#F8F8F8',
    lightGray: "#F5F6FB",
    lightGray2: '#757575',

    transparentBlack1: 'rgba(2, 2, 2, 0.1)',
    transparentBlack3: 'rgba(2, 2, 2, 0.3)',
    transparentBlack5: 'rgba(2, 2, 2, 0.5)',
    transparentBlack7: 'rgba(2, 2, 2, 0.7)',
    transparentBlack9: 'rgba(2, 2, 2, 0.9)',

    transparentGray: 'rgba(77,77,77, 0.8)',
    transparentDarkGray: 'rgba(20,20,20, 0.9)',

    transparent: 'transparent',
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;