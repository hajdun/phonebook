import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  userName = '';
  password = '';
  errorMessage=''

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  login() {
    this.loginService.login()
  }
}
