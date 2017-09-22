import { BadRequestError } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
      ._catch(
        (error: Response) => {
          if (error.status === 400) {
            return Observable.throw(new BadRequestError());
          }
          return Observable.throw(new AppError(error));
        }
      );
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id)
      ._catch(
        (error: Response) => {
          if (error.status === 404) {
            return Observable.throw(new NotFoundError());
          }
          return Observable.throw(new AppError(error));
        }
      );
  }
}
