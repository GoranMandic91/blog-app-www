import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './index.css';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import IconButton from '@material-ui/core/IconButton';
interface PostCardProps {
  id: number;
  name: string;
  text: string;
}

export default function CommentCard({ name, text }: PostCardProps) {
  return (
    <Card className="CommentCard" raised>
      <CardContent className="Content">
        <Typography variant="body1" color="textPrimary" component="h1">
          {name}
          <IconButton className="FloatRight" color="primary" size="small">
            <EditTwoToneIcon />
          </IconButton>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h1">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
