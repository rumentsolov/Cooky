//costant//Fontss.ts

import { StyleSheet , Dimensions } from 'react-native';

const FONTSIZE = () => {

  return StyleSheet.create({
    default: {
        fontSize: 18,
      },
    xSmall: {
      fontSize: 12,
    },
    small: {
      fontSize: 14,
    },
    medium: {
      fontSize: 16,
    },
    large: {
      fontSize: 20,
    },
    xLarge: {
      fontSize: 22,
    },
    xxLarge: {
      fontSize: 24,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8,
      //lineHeight: 24,
      //marginTop: 0,
      //paddingVertical: 0,
    },
    semiBold: {
        fontSize: 18,
        fontWeight: '500',
    },
    bold: {
        fontSize: 18,
        fontWeight: "bold",
    },
    describtion: {
      fontSize: 14,
    },
    button: {
      fontSize: 16,
      fontWeight: "bold",
    },
    link: {
    fontSize: 16,
    lineHeight: 24,
    color: '#0a7ea4',
    textDecorationLine: 'underline',
    }
  });
};

export { FONTSIZE };
