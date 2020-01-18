import { PostsModel } from '../class/PostsModel';

describe('PostsModel', () => {

  it('Is Person Object correct', () => {
    const postsModel = new PostsModel();
    postsModel.getAllUsers();
    postsModel.getUsers()

  })
})