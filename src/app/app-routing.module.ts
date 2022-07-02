import { LoginPageComponent } from './pages/login/login-page/login-page.component';
import { PhonebookPageComponent } from './pages/phonebook/phonebook-page/phonebook-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/shared/auth-guard';

const routes: Routes = [
  { path: 'contacts', component: PhonebookPageComponent, canActivate: [AuthGuard]  },
  { path: '', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
