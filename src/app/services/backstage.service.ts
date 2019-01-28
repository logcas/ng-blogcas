import { Injectable } from '@angular/core';

import { User } from '../models/user';
import { Article } from '../models/article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackstageService {

  login(user: User) {
    return new Observable((handler) => {
      const timeoutId = setTimeout(() => {
        if (user.username === 'admin' && user.password === '123456') {
          console.log('success');
          handler.next({
            code: 0,
            msg: '登录成功',
          });
        } else {
          console.log('fail');
          handler.next({
            code: 1000,
            msg: '用户名或密码错误',
          });
        }
        if (handler.complete) {
          handler.complete();
        }
      }, 2000);
      return {
        unsubscribe() {
          clearTimeout(timeoutId);
        }
      };
    });
  }

  saveArticle(article: Article, type) {
    return new Observable(handler => {
      handler.next({
        code: 0,
        msg: '发表成功',
      });
      handler.complete();
    });
  }

  constructor() { }
}
