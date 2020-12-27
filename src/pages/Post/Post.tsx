import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Link, useParams } from "react-router-dom";
import { Comment, CommentsActionTypes } from '../../store/comments/types';
import CommentCard from '../../components/CommentCard'
import { SinglePost, SinglePostActionTypes } from '../../store/post/types';
import PostCard from '../../components/PostCard';

interface PostProps {
  post: SinglePost | null;
  comments: Comment[];
  fetchPost(id: string): SinglePostActionTypes;
  fetchComments(id: string): CommentsActionTypes;
}

function Post({ post, comments, fetchPost, fetchComments }: PostProps) {
  let { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchPost(id);
    fetchComments(id);
  }, [id, fetchPost, fetchComments]);

  return (
    <>
      <Button component={Link} to="/posts" variant="contained" color="primary">
        Back to all posts
      </Button>

      {post &&
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          hidden
        />
      }
      {
        comments.map((comment: Comment) =>
          <CommentCard
            key={comment.id}
            id={comment.id}
            name={comment.name}
            text={comment.text}
          />
        )
      }
    </>
  );
}

export default Post;
