import React from 'react';
import {FlatList, Text, View} from 'react-native';
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
  if (posts.length === 0) {
    return;
  }

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

      <FlatList
        data={posts}
        renderItem={Card}
        ItemSeparatorComponent={() => (
          <View
            style={[DividerStyled.divider, Dimension.marginBottomDefault]}
          />
        )}
        keyExtractor={item => 'article' + item.id}
      />
    </View>
  );
};
