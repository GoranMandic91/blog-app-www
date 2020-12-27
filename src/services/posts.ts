import connection from './connection';

export default class postsAPI {
  static getAll() {
    return connection.get('posts');
  }

  static getAllComments(id: string) {
    return connection.get(`posts/${id}/comments`);
  }

  static getPost(id: string) {
    return connection.get(`posts/${id}`);
  }
}
