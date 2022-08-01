import {atom} from 'recoil';

export const posts = atom({
  key: 'posts', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
