import Axios from 'axios';

const connection = Axios.create({
  baseURL: process.env.REACT_APP_BLOG_APP_API_URL,
});

export default connection;
