import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from '../../store/posts/selectors';
import { RootState } from '../../store/reducers';
import Home from './Home';

const HomeConnected = connect(
  (state: RootState) => ({
    posts: getPosts(state)
  }),
  (dispatch) => bindActionCreators({}, dispatch),
)(Home);

export default HomeConnected;
