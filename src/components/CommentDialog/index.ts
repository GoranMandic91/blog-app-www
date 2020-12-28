import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeCommentDialog, createCommentRequest, updateCommentRequest } from '../../store/comments/actions';
import { isDialogOpen } from '../../store/comments/selectors';
import { getPostId } from '../../store/post/selectors';
import { getComment } from '../../store/comments/selectors';
import { RootState } from '../../store/reducers';
import CommentDialog from './CommentDialog';

const CommentDialogConnected = connect(
  (state: RootState) => ({
    isOpen: isDialogOpen(state),
    postId: getPostId(state),
    comment: getComment(state)
  }),
  (dispatch) => bindActionCreators({
    closeDialog: closeCommentDialog,
    createComment: createCommentRequest,
    updateComment: updateCommentRequest
  }, dispatch),
)(CommentDialog);

export default CommentDialogConnected;
