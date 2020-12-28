import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeCreateCommentDialog, createCommentRequest } from '../../store/comments/actions';
import { isDialogOpen } from '../../store/comments/selectors';
import { getPostId } from '../../store/post/selectors';
import { RootState } from '../../store/reducers';
import CommentDialog from './CommentDialog';

const CommentDialogConnected = connect(
  (state: RootState) => ({
    isOpen: isDialogOpen(state),
    postId: getPostId(state)
  }),
  (dispatch) => bindActionCreators({
    closeDialog: closeCreateCommentDialog,
    createComment: createCommentRequest
  }, dispatch),
)(CommentDialog);

export default CommentDialogConnected;
