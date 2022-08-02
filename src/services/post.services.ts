import {getPostsByUserId} from '../API/queries/post.queries';
import {PostsByUserId} from '../API/queries/post.interfaces';

interface GetPostsProps {
  maxUsers?: number;
  handlePost: (data: PostsByUserId) => void;
}

export async function getPosts({
  maxUsers = 5,
  handlePost,
}: GetPostsProps): Promise<void> {
  for (const item of Array.from({length: maxUsers}, (v, i) => i + 1)) {
    const result = await getPostsByUserId(item);
    handlePost(result);
  }
}
