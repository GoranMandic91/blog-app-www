import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from '../../store/posts/selectors';
import { RootState } from '../../store/reducers';
import Post from './Post';

const PostConnected = connect(
  (state: RootState) => ({
    post: getPosts(state)
  }),
  (dispatch) => bindActionCreators({
  }, dispatch),
)(Post);

export default PostConnected;
