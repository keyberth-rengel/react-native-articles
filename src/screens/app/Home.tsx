import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {getPosts} from '../../services/post.services';
import {useRecoilState} from 'recoil';
import {posts as postsState} from '../../store';
import {PostsByUserId} from '../../API/queries/post.interfaces';
import {BackgroundColor, ContainerStyled, Dimension} from '../../styles';
import {Section} from '../../Components/Section';
import {Input} from '../../Components/Input';

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
      <Input />

      <FlatList
        data={posts}
        renderItem={Section}
        ItemSeparatorComponent={() => <View style={[Dimension.heightMin]} />}
        keyExtractor={item => item.userId.toString()}
      />
    </View>
  );
};
