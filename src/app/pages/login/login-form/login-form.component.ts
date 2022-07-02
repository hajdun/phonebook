import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  userName = '';
  password = '';
  errorMessage = '';

  constructor(
    private loginService: LoginService,
    private cookieService: CookieService,
    private router: Router
    ) {}

  ngOnInit(): void {}

  login() {
    const token = this.loginService.login(this.userName, this.password);
    if (token) {
      this.cookieService.set('Auth', token);
      this.router.navigate(['/contacts']);
    }
  }
}
