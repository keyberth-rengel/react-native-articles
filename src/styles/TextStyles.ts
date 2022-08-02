import {colors} from './colors';
import {StyleSheet} from 'react-native';

export const TextStyled = StyleSheet.create({
  textLongStyled: {
    fontSize: 20,
    lineHeight: 20,
    color: colors.black,
  },
  textDefaultStyled: {
    fontSize: 16,
    lineHeight: 20,
    color: colors.black,
  },
  textMediumStyled: {
    fontSize: 14,
    lineHeight: 18,
    color: colors.black,
  },
  textSmallStyled: {
    fontSize: 12,
    lineHeight: 18,
    color: colors.black,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  fontWeight: {
    fontWeight: 'bold',
  },
  fontColorGrayDark: {
    color: colors.grayDark,
  },
});
