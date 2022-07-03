import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private router: Router,
    private cookieService: CookieService
    ) { }

  ngOnInit(): void {
    const currentUser = this.cookieService.get('Auth');
    if (currentUser) {
        this.router.navigate(['contacts'], { });
    }
  }

}
