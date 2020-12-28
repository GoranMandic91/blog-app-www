import React, { useState, useEffect, ChangeEvent } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { CommentsActionTypes } from '../../store/comments/types';

export interface CommentDialogProps {
  isOpen: boolean;
  postId: number | null;
  closeDialog(): CommentsActionTypes;
  createComment(id: number, name: string, text: string): CommentsActionTypes;
}

export default function CommentDialog({ isOpen, postId, closeDialog, createComment }: CommentDialogProps) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [open, setOpen] = useState(isOpen);
  const [error, setError] = useState(false);

  const handleSave = () => {
    if (postId) {
      createComment(postId, name, text);
    }
    handleClose();
  };

  const handleClose = () => {
    closeDialog();
    setName('');
    setText('')
  }

  const handleTextChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const text = e.target.value;
    setText(text);
    setError(!e.target.value);
  };

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen]);

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new comment</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off">
            <TextField id="name" label="Name" fullWidth defaultValue="" onChange={(e) => setName(e.target.value)} />
            <TextField error={error} id="text" label="Comment" fullWidth required multiline rowsMax={8} rows={4} onChange={handleTextChange} />
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
