import { PostsClass } from '../class/Posts';
import { PersonClass } from '../class/Person';
import { users } from '../data/users';
import { Posts } from '../interfaces/PostInterface';
import axios from 'axios';


export class PostsModel {

  private persons: PersonClass[] = [];
  private postsWithUser: PostsClass[] = [];

  getAllUsers() {
    users().forEach(user => {
      this.persons[user.id] = new PersonClass();
      this.persons[user.id].setId(user.id);
      this.persons[user.id].setFirstName(user.firstname);
      this.persons[user.id].setLastName(user.lastname);
      this.persons[user.id].setAddress({ zip: user.zip, city: user.city, places: user.street })
    });
  }

  getPost() {
    const url: string = 'https://jsonplaceholder.typicode.com/posts';
    return axios.get(url);
  }

  joinUserWithPosts(posts: Posts[]) {
    this.persons.forEach(user => {
      posts.forEach((post) => {
        if (user.getId() === post.userId) {
          this.postsWithUser[post.id] = new PostsClass();
          this.postsWithUser[post.id].setId(post.id);
          this.postsWithUser[post.id].setTitle(post.title);
          this.postsWithUser[post.id].setBody(post.body);
          this.postsWithUser[post.id].setUserId(user.getId());
        }
      })
    });

  }

  getUsers() {
    return this.persons;
  }

  getPostsWithUser() {
    return this.postsWithUser;
  }
}