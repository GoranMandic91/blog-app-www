import React, { useState, useEffect, ChangeEvent } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Comment, CommentsActionTypes } from '../../store/comments/types';

export interface CommentDialogProps {
  isOpen: boolean;
  postId: number | null;
  comment: Comment | null;
  closeDialog(): CommentsActionTypes;
  createComment(id: number, name: string, text: string): CommentsActionTypes;
  updateComment(id: number, name: string, text: string): CommentsActionTypes;
}

export default function CommentDialog({
  isOpen,
  postId,
  comment,
  closeDialog,
  createComment,
  updateComment
}: CommentDialogProps) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [open, setOpen] = useState(isOpen);
  const [error, setError] = useState(false);

  const handleSave = () => {
    if (postId) {
      if (comment) {
        updateComment(comment.id, name, text);
      } else {
        createComment(postId, name, text);
      }
    }
    handleClose();
  };

  const handleClose = () => {
    setName('');
    setText('');
    setError(false);
    closeDialog();
  }

  const handleTextChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setText(e.target.value);
    setError(!e.target.value);
  };

  useEffect(() => {
    setOpen(isOpen)
    setName(comment?.name || '');
    setText(comment?.text || '');
  }, [isOpen, comment]);

  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm" aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{comment ? 'Edit comment' : 'Add comment'}</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off">
            <TextField id="name" defaultValue={comment?.name} label="Name" fullWidth onChange={(e) => setName(e.target.value)} />
            <TextField error={error} id="text" defaultValue={comment?.text} label="Comment" fullWidth required multiline rowsMax={8} rows={4} onChange={handleTextChange} />
          </form>
        </DialogContent>
        <DialogActions>
          <Button disabled={!text.length} onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
