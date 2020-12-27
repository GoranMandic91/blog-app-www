import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Link, useParams } from "react-router-dom";

// interface PostProps {
//   id: number;
// }

function Post() {
  let { id } = useParams<{ id: string }>();

  useEffect(() => {
    console.log('ID changed: ', id)
  }, [id]);

  return (
    <>
      <div> Blog information for {id}</div>
      <Link to="/posts">
        <Button variant="contained" size="small" color="primary">
          Back to all posts
        </Button>
      </Link>
    </>
  );
}

export default Post;
