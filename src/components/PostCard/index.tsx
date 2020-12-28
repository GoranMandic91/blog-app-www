import React from 'react';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import Badge from '@material-ui/core/Badge';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import AddCommentOutlinedIcon from '@material-ui/icons/AddCommentOutlined';
import IconButton from '@material-ui/core/IconButton';
import { CommentsActionTypes } from '../../store/comments/types';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from "@material-ui/core/Avatar";
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import './index.css';

interface PostCardProps {
  id: number;
  title: string;
  content: string;
  numOfComments?: number;
  hidden?: boolean;
  openDialog?(): CommentsActionTypes;
}

export default function PostCard({ id, title, content, numOfComments, hidden, openDialog }: PostCardProps) {
  return (
    <>
      {hidden && (
        <Card className="PostCard" raised>
          <CardHeader

            action={
              <IconButton color="primary" size="small" onClick={openDialog}>
                <AddCommentOutlinedIcon />
              </IconButton>
            }
            title={title}
            subheader={content}
          />
        </Card>
      )}
      {!hidden && (
        <Card className="PostCard" raised>
          <CardHeader
            className="PostCardHeader"
            avatar={
              < Avatar aria-label="recipe">
                {title[0] || content[0]}
              </Avatar>
            }
            action={
              <IconButton >
                <Badge badgeContent={numOfComments} color="primary" showZero>
                  <ChatOutlinedIcon color="primary" />
                </Badge>
              </IconButton>
            }
            title={title}
            subheader={content.substring(0, 80) + '...'}
          />
          <CardActions className="FloatRight">
            <Button component={Link} to={`/posts/${id}`} size="small" color="primary">Read More</Button>
          </CardActions>
        </Card>
      )}
    </>
  );
}
