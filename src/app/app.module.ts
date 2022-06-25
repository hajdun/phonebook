import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonebookPageComponent } from './pages/phonebook/phonebook-page/phonebook-page.component';
import { PhonebookItemComponent } from './pages/phonebook/phonebook-item/phonebook-item.component';
import { EditPhonebookItemComponent } from './pages/phonebook/edit-phonebook-item/edit-phonebook-item.component';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PhonebookPageComponent,
    PhonebookItemComponent,
    EditPhonebookItemComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
