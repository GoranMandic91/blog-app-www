import React from 'react';
import Card from '@material-ui/core/Card';
import './index.css';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import IconButton from '@material-ui/core/IconButton';
import { CommentsActionTypes } from '../../store/comments/types';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from "@material-ui/core/Avatar";

interface PostCardProps {
  id: number;
  name: string;
  text: string;
  openDialog?(): CommentsActionTypes;
}

export default function CommentCard({ name, text, openDialog }: PostCardProps) {
  return (
    <Card className="CommentCard" raised>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            {name[0] || ':)'}
          </Avatar>
        }
        action={
          <IconButton color="primary" size="small" onClick={openDialog}>
            <EditTwoToneIcon />
          </IconButton>
        }
        title={name}
        subheader={text}
      />
    </Card>
  );
}
