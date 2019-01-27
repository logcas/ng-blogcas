import { Injectable } from '@angular/core';

import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackstageService {

  login(user: User) {
    return new Observable((handler) => {
      const { next, complete } = handler;
      const timeoutId = setTimeout(() => {
        if (user.username === 'admin' && user.password === '123456') {
          console.log('success');
          next({
            code: 0,
            msg: '登录成功',
          });
        } else {
          console.log('fail');
          next({
            code: 1000,
            msg: '用户名或密码错误',
          });
        }
        if (complete) {
          complete();
        }
      }, 2000);
      return {
        unsubscribe() {
          clearTimeout(timeoutId);
        }
      };
    });
  }

  testObserve() {
    return new Observable((handler) => {
      const { next, complete } = handler;
      next(1);
      complete();

      return {
        unsubscribe() {},
      };
    });
  }

  constructor() { }
}
