import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private isAuthenticated: boolean = false;
  private loginServiceSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }

  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  ngOnInit() {
    this.checkForSession();
  }

  ngOnDestroy() {
    this.loginServiceSubscription.unsubscribe();
  }

  public onSubmit(): void {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    if (!(username && password)) {
      alert('incorrect username/password');
      return;
    }
    this.loginService.login({ username, password }).subscribe((user: UserModel) => {
      if (user && user.token) {
        alert('logged in successfully');
        this.isAuthenticated = true;
        this.loginForm.reset();
        this.loginService.setUser(user);
      } else {
        alert('Please try again, server error');
      }
    });
  }
  private checkForSession(): void {
    if(this.loginService.getUser()) {
      this.isAuthenticated = true;
    }
  }
}
