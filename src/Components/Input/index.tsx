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

interface InputProps {
  data: {
    searchText: string;
  };
  actions: {
    filterArticlesByTextInput: (data: string) => void;
  };
}

export const Input = ({
  data: {searchText},
  actions: {filterArticlesByTextInput},
}: InputProps) => {
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
        value={searchText}
        onChangeText={filterArticlesByTextInput}
        placeholderTextColor={colors.gray}
        placeholder="Buscar"
        style={[InputStyled.input]}
      />
    </View>
  );
};
