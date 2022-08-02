import {Dimensions, StyleSheet} from 'react-native';
import {colors} from './colors';

//dimensions
const {width, height} = Dimensions.get('window');

export const ContainerStyled = StyleSheet.create({
  fullScreen: {
    width,
    height,
    backgroundColor: colors.white,
  },
  custom: {
    width,
    height: 'auto',
  },
});

export const BackgroundColor = StyleSheet.create({
  black: {
    backgroundColor: colors.black,
  },
  grey: {
    backgroundColor: colors.gray,
  },
  greyDark: {
    backgroundColor: colors.grayDark,
  },
  greyLight: {
    backgroundColor: colors.grayLight,
  },
});

export const Dimension = StyleSheet.create({
  paddingTopMax: {
    paddingTop: 48,
  },
  paddingTop: {
    paddingTop: 32,
  },
  paddingTopMin: {
    paddingTop: 8,
  },
  paddingBottom: {
    paddingBottom: 32,
  },
  paddingBottomDefault: {
    paddingBottom: 16,
  },
  paddingLeft: {
    paddingLeft: 32,
  },
  paddingRight: {
    paddingRight: 32,
  },
  paddingHorizontal: {
    paddingHorizontal: 32,
  },
  paddingHorizontalMin: {
    paddingHorizontal: 16,
  },
  paddingVertical: {
    paddingVertical: 32,
  },
  paddingVerticalDefault: {
    paddingVertical: 16,
  },
  paddingVerticalMin: {
    paddingVertical: 16,
  },
  marginBottomDefault: {
    marginBottom: 16,
  },
  heightDefault: {
    height: 16,
  },
  heightMin: {
    height: 8,
  },
});

export const DividerStyled = StyleSheet.create({
  smallWidthDivider: {
    height: 3,
    backgroundColor: colors.black,
    marginVertical: 5,
    width: 32,
  },
  divider: {
    height: 1,
    backgroundColor: colors.black,
    paddingHorizontal: 16,
  },
});

export const InputStyled = StyleSheet.create({
  input: {
    height: 48,
    borderBottomColor: colors.white,
    borderBottomWidth: 2,
    fontSize: 20,
    paddingHorizontal: 16,
    color: colors.gray,
  },
});
