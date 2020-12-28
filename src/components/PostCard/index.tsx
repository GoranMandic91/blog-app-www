import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import AddCommentOutlinedIcon from '@material-ui/icons/AddCommentOutlined';
import './index.css';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import { CommentsActionTypes } from '../../store/comments/types';

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
    <Card className="PostCard" raised>
      <CardContent >
        <Typography gutterBottom variant="h5" component="h2">
          {title}
          {!hidden &&
            <Badge className="FloatRight" badgeContent={numOfComments} color="primary" showZero>
              <ChatOutlinedIcon color="primary" />
            </Badge>
          }
          {hidden &&
            <IconButton className="FloatRight" color="primary" size="small" onClick={openDialog}>
              <AddCommentOutlinedIcon />
            </IconButton>
          }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
      {!hidden &&
        <CardActions className="FloatRight">
          <Button component={Link} to={`/posts/${id}`} variant="contained" color="primary">
            Open post
          </Button>
        </CardActions>
      }
    </Card>
  );
}
