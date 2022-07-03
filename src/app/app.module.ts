import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonebookPageComponent } from './pages/phonebook/phonebook-page/phonebook-page.component';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { EditPhonebookItemComponent } from './pages/phonebook/card/edit-phonebook-item/edit-phonebook-item.component';
import { PhonebookItemComponent } from './pages/phonebook/card/phonebook-item/phonebook-item.component';
import { LoginFormComponent } from './pages/login/login-form/login-form.component';
import { ContactFilterComponent } from './pages/phonebook/contact-filter/contact-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    PhonebookPageComponent,
    PhonebookItemComponent,
    EditPhonebookItemComponent,
    LoginPageComponent,
    LoginFormComponent,
    ContactFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
