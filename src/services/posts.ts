import connection from './connection';

export default class postsAPI {
  static getAll() {
    return connection.get('posts');
  }
}
