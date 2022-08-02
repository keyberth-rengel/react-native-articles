import AsyncStorage from '@react-native-async-storage/async-storage';
import {keyStorage} from '../../core/contants';
import {PostsByUserId} from '../../API/queries/post.interfaces';

export const useSaveStoreData =
  () =>
  async (data: PostsByUserId[], key: string = keyStorage.ARTICLES_STORAGE) => {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };

export const useGetStoreData =
  () =>
  async (
    key: string = keyStorage.ARTICLES_STORAGE,
  ): Promise<PostsByUserId[] | undefined> => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // get error
    }
  };

const removeStoreData = async (
  key: string = keyStorage.ARTICLES_STORAGE,
): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }
};
