import { PersonClass } from './Person';
import { Posts } from '../interfaces/PostInterface';

export class PostsClass {

  private id: number = 0;
  private title: string = "";
  private body: string = "";
  private userId: number = 0

  public setId(id: number): void {
    this.id = id;
  }

  public getId(): number {
    return this.id;
  }

  public setTitle(title: string): void {
    this.title = title
  }

  public getTitle(): string {
    return this.title;
  }

  public setBody(body: string): void {
    this.body = body;
  }

  public getBody(): string {
    return this.body;
  }

  public setUserId(userId: number) {
    this.userId = userId
  }

  public getUserId(): number {
    return this.userId
  }



}