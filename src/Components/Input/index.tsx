import React from 'react';
import {
  BackgroundColor,
  colors,
  ContainerStyled,
  Dimension,
  InputStyled,
} from '../../styles';
import {TextInput, View} from 'react-native';
import {useRecoilState} from 'recoil';
import {posts as postsState} from '../../store';

export const Input = () => {
  const [posts] = useRecoilState(postsState);

  return (
    <View
      style={[
        ContainerStyled.custom,
        BackgroundColor.black,
        Dimension.paddingHorizontal,
        {
          paddingBottom: 2,
        },
      ]}>
      <TextInput
        placeholderTextColor={colors.gray}
        placeholder="Buscar"
        style={[InputStyled.input]}
      />
    </View>
  );
};
