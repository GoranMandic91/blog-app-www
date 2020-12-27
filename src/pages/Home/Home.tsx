import React from 'react';
import { Post } from '../../store/posts/types';
import PostCard from '../../components/PostCard';

export interface PostsProps {
  posts: Post[];
}

function Home({ posts }: PostsProps) {

  return (
    <div>
      {
        posts.map((post: Post) =>
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            numOfComments={post.numOfComments}
          />
        )
      }
    </div>
  );
}

export default Home;
