import React from 'react';
import {Text, View} from 'react-native';
import {
  BackgroundColor,
  ContainerStyled,
  Dimension,
  DividerStyled,
  TextStyled,
} from '../../styles';
import {Card} from './Card';

export const Section = () => {
  return (
    <View
      style={[
        ContainerStyled.custom,
        Dimension.paddingHorizontalMin,
        Dimension.paddingVerticalMin,
        BackgroundColor.grey,
      ]}>
      <Text style={[TextStyled.textLongStyled, TextStyled.fontWeight]}>
        Lorem Ipsum
      </Text>
      <View style={[DividerStyled.smallWidthDivider]} />
      <Card />
      <View style={[DividerStyled.divider]} />
    </View>
  );
};
