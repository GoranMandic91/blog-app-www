import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Link, useParams } from "react-router-dom";
import { Comment, CommentsActionTypes } from '../../store/comments/types';
import CommentCard from '../../components/CommentCard'

interface PostProps {
  comments: Comment[];
  fetchComments(id: string): CommentsActionTypes;
}

function Post({ comments, fetchComments }: PostProps) {
  let { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchComments(id);
  }, [id, fetchComments]);

  return (
    <>
      <div> Blog information for {id}</div>
      <Link to="/posts">
        <Button variant="contained" size="small" color="primary">
          Back to all posts
        </Button>
      </Link>
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
