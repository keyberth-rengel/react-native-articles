import {atom} from 'recoil';
import {PostsByUserId} from '../../API/queries/post.interfaces';

export const posts = atom<PostsByUserId[]>({
  key: 'posts', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
