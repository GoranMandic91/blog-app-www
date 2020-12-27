import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './index.css';

interface PostCardProps {
  id: number;
  name: string;
  text: string;
}

export default function CommentCard({ id, name, text }: PostCardProps) {
  return (
    <Card className="Card" raised>
      <CardContent >
        <Typography variant="body1" color="textPrimary" component="h1">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h1">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
