import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from '../../store/posts/selectors';
import { RootState } from '../../store/reducers';
import Posts from './Posts';

const PostsConnected = connect(
  (state: RootState) => ({
    posts: getPosts(state)
  }),
  (dispatch) => bindActionCreators({}, dispatch),
)(Posts);

export default PostsConnected;
