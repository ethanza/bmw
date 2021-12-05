import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/login.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private user: UserModel;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.user = this.loginService.getUser();
  }

  private logout() {
    this.loginService.logout();
    // just to force rechecking of auth
    location.reload();
  }

}
