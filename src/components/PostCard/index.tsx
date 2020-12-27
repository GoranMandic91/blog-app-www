import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import ChatTwoToneIcon from '@material-ui/icons/ChatTwoTone';
import './index.css';

interface PostCardProps {
  title: string;
  content: string;
  numOfComments: number;
}

export default function PostCard({ title, content, numOfComments }: PostCardProps) {
  return (
    <Card className="Card">
      <CardContent >
        <Typography gutterBottom variant="h5" component="h2">
          {title}
          <Badge className="FloatRight" badgeContent={numOfComments} color="primary" showZero>
            <ChatTwoToneIcon color="primary" />
          </Badge>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions className="FloatRight">
        <Button variant="contained" size="small" color="primary">
          Open post
        </Button>
      </CardActions>
    </Card>
  );
}
