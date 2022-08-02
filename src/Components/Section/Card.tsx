import React from 'react';
import {Text, View} from 'react-native';
import {Dimension, TextStyled} from '../../styles';
import {PostType} from '../../API/queries/post.interfaces';

interface CardProps {
  item: PostType;
}

export const Card = ({item: {title, body}}: CardProps) => {
  return (
    <View style={[Dimension.paddingBottomDefault]}>
      <Text style={[TextStyled.textDefaultStyled, TextStyled.fontWeight]}>
        {title}
      </Text>

      <View style={[Dimension.heightDefault]} />

      <Text
        style={[
          TextStyled.textMediumStyled,
          TextStyled.fontWeight,
          TextStyled.fontColorGrayDark,
        ]}>
        {body}
      </Text>
    </View>
  );
};
