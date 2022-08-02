import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {getPosts} from '../../services/post.services';
import {useRecoilState} from 'recoil';
import {posts as postsState} from '../../store';
import {PostsByUserId} from '../../API/queries/post.interfaces';

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

  console.log({posts});

  return (
    <View>
      <Text>Hello world</Text>
    </View>
  );
};
