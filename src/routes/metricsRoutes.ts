import { Posts } from './../interfaces/PostInterface';
import { Router, Request, Response } from 'express';
import { PostsModel } from '../class/PostsModel'

export const postsRoute = (router: Router): Router => {
  router.get('/posts', (request: Request, response: Response) => {

    const postsModel = new PostsModel();
    postsModel.getAllUsers();

    postsModel.getPost().then((posts) => {
      postsModel.joinUserWithPosts(posts.data);

      const data = postsModel.getPostsWithUser();

      data.forEach(post => {
        console.log(post.getBody());
      })

    });

    response.send('Privet mir!')

  });
  return router;
};
