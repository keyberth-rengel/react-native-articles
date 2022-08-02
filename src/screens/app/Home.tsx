import React, {useEffect} from 'react';
import {TextInput, View} from 'react-native';
import {getPosts} from '../../services/post.services';
import {useRecoilState} from 'recoil';
import {posts as postsState} from '../../store';
import {PostsByUserId} from '../../API/queries/post.interfaces';
import {
  BackgroundColor,
  colors,
  ContainerStyled,
  Dimension,
} from '../../styles';
import {Section} from '../../Components/Section';

export const Home = () => {
  const [posts, setPost] = useRecoilState(postsState);

  const handlePost = (data: PostsByUserId) => {
    setPost(prevState => {
      return [...prevState, data];
    });
  };

  useEffect(() => {
    getPosts({handlePost}).catch(error => console.log({error}));
  }, []);

  return (
    <View
      style={[
        ContainerStyled.fullScreen,
        Dimension.paddingTopMax,
        BackgroundColor.greyLight,
      ]}>
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
          style={{
            height: 48,
            borderBottomColor: colors.white,
            borderBottomWidth: 2,
            fontSize: 20,
            paddingHorizontal: 16,
          }}
        />
      </View>
      <Section />
    </View>
  );
};
