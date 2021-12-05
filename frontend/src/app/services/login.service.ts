import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { UserModel } from '../models/user.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public userData: UserModel;

  constructor(
    private http: HttpClient
  ) { }

  public login(user: LoginModel): Observable<UserModel> {
    try {
      return this.http.post<UserModel>(`${environment.baseApi}/authentication/login`, user);
    } catch (error) {
      alert('Incorrect login details');
    }
  }

  public getUser(): UserModel {
    try {
      if (this.userData) {
        return this.userData;
      }
      this.userData = JSON.parse(localStorage.getItem('user'));
      return this.userData;
    } catch (error) {
      console.log('no user');
    }
  }

  public setUser(data: UserModel): void {
    localStorage.setItem('user', JSON.stringify(data));
    this.userData = data;
  }

  public logout(): void {
    localStorage.clear();
  }

}
