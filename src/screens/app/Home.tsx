import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {getPosts} from '../../services/post.services';
import {useRecoilState} from 'recoil';
import {posts as postsState} from '../../store';
import {PostsByUserId} from '../../API/queries/post.interfaces';
import {BackgroundColor, ContainerStyled, Dimension} from '../../styles';
import {Section} from '../../Components/Section';
import {Input} from '../../Components/Input';
import {useGetStoreData, useSaveStoreData} from '../../hooks/useStorage';

export const Home = () => {
  const [posts, setPost] = useRecoilState(postsState);
  const [leakedArticles, setLeakedArticles] = useState<PostsByUserId[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const setArticlesLS = useSaveStoreData();
  const getArticlesLS = useGetStoreData();

  const handlePost = (data: PostsByUserId) => {
    setPost(prevState => {
      return [...prevState, data];
    });
  };

  useEffect(() => {
    if (posts.length > 0) {
      setArticlesLS(posts).catch(error => console.log({error}));
    }
  }, [posts]);

  useEffect(() => {
    getAndSetArticlesStorage().catch(error => console.log({error}));
  }, []);

  const getAndSetArticlesStorage = async () => {
    const articles = await getArticlesLS();

    if (!articles || articles.length === 0) {
      getArticlesServices().catch(error => console.log({error}));
    } else {
      setPost(articles);
    }
  };

  const getArticlesServices = async () => {
    await getPosts({handlePost}).catch(error => console.log({error}));
  };

  const filterArticlesByTextInput = (value: string) => {
    setSearchText(value);
    if (value.length > 0) {
      const newArticlesList = posts?.map(item => {
        const postsByUser = item.posts.filter(post =>
          post.title.toLowerCase().includes(value.toLowerCase()),
        );

        return {
          userId: item.userId,
          posts: postsByUser,
        };
      });

      setLeakedArticles(newArticlesList);
    } else {
      setLeakedArticles(leakedArticles);
    }
  };

  return (
    <View
      style={[
        ContainerStyled.fullScreen,
        Dimension.paddingTopMax,
        BackgroundColor.greyLight,
      ]}>
      <Input data={{searchText}} actions={{filterArticlesByTextInput}} />

      <FlatList
        data={leakedArticles.length > 0 ? leakedArticles : posts}
        renderItem={Section}
        ItemSeparatorComponent={() => <View style={[Dimension.heightMin]} />}
        keyExtractor={item => 'user' + item.userId}
      />
    </View>
  );
};
