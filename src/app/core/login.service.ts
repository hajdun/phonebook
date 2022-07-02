import { Injectable } from '@angular/core';
import {sign} from 'fake-jwt-sign'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public currentUserValue= new BehaviorSubject("");

  constructor() {}

  login(userName: string, password: string) {
    const authStatus = {
      isAuthenticated: true,
      userId: 'e4d1bc2ab25c',
      userRole: 'manager@test.com'
    }

    const accessToken = sign(authStatus, 'secret', {
        expiresIn: '1h',
        algorithm: 'none',
      })

    if (userName && password) {
      this.currentUserValue.next(authStatus.userId)
      return accessToken;
    }
    throw new Error("Failed to login")
  }
}
