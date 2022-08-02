import React from 'react';
import {Text, View} from 'react-native';
import {Dimension, TextStyled} from '../../styles';

export const Card = () => {
  return (
    <View style={[Dimension.paddingBottomDefault]}>
      <Text style={[TextStyled.textDefaultStyled, TextStyled.fontWeight]}>
        is simply dummy text of the printing and typesett industry.
      </Text>

      <View style={[Dimension.heightDefault]} />

      <Text
        style={[
          TextStyled.textMediumStyled,
          TextStyled.fontWeight,
          TextStyled.fontColorGrayDark,
        ]}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        the the the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </Text>
    </View>
  );
};
