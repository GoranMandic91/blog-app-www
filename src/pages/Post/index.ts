import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCommentsRequest, openCreateCommentDialog } from '../../store/comments/actions';
import { getComments } from '../../store/comments/selectors';
import { fetchSinglePostRequest } from '../../store/post/actions';
import { getPost } from '../../store/post/selectors';
import { RootState } from '../../store/reducers';
import Post from './Post';

const PostConnected = connect(
  (state: RootState) => ({
    post: getPost(state),
    comments: getComments(state)
  }),
  (dispatch) => bindActionCreators({
    fetchPost: fetchSinglePostRequest,
    fetchComments: fetchCommentsRequest,
    openDialog: openCreateCommentDialog
  }, dispatch),
)(Post);

export default PostConnected;
