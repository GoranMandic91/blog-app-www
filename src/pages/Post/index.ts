import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCommentsRequest } from '../../store/comments/actions';
import { getComments } from '../../store/comments/selectors';
import { RootState } from '../../store/reducers';
import Post from './Post';

const PostConnected = connect(
  (state: RootState) => ({
    comments: getComments(state)
  }),
  (dispatch) => bindActionCreators({
    fetchComments: fetchCommentsRequest
  }, dispatch),
)(Post);

export default PostConnected;
