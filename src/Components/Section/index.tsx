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
import {PostsByUserId} from '../../API/queries/post.interfaces';

interface SectionProps {
  item: PostsByUserId;
}

export const Section = ({item: {userId, posts}}: SectionProps) => {
  return (
    <View
      style={[
        ContainerStyled.custom,
        Dimension.paddingHorizontalMin,
        Dimension.paddingVerticalMin,
        BackgroundColor.grey,
      ]}>
      <Text style={[TextStyled.textLongStyled, TextStyled.fontWeight]}>
        User {userId}
      </Text>
      <View style={[DividerStyled.smallWidthDivider]} />
      <Card
        data={{
          posts,
        }}
      />
      <View style={[DividerStyled.divider]} />
    </View>
  );
};
