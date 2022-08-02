import {BASE_URL, SUB_DOMAINS} from '../../core/contants';
import {PostsByUserId, PostType} from './post.interfaces';

function generatePostObject(
  postsById: PostType[],
  maxArticles: number = 3,
): PostsByUserId {
  return {
    userId: postsById[0].userId,
    posts: postsById?.splice(0, maxArticles),
  };
}

export async function getPostsByUserId(userId: number): Promise<PostsByUserId> {
  const results: PostType[] = await fetch(
    `${BASE_URL}${SUB_DOMAINS.USERS}${userId}/${SUB_DOMAINS.POSTS}`,
  ).then(data => data.json());

  return generatePostObject(results);
}
