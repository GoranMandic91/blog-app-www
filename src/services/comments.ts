import connection from './connection';

export default class commentsAPI {
  static create(postId: number, name: string, text: string) {
    return connection.post('comments', { postId, name, text });
  }

  static update(id: number, name: string, text: string) {
    return connection.put(`comments/${id}`, { name, text });
  }
}
