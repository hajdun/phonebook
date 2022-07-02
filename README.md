# Phonebook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

# Description

A client to manage contact info.
It has a main page where the people are listed with the names and phone numbers
On each person row there is a way to edit it (with an edit button or something) and a delete button
You can add people to the list
You can search by name (if you have time, also by phone number, but one of them is enough)
Multiple names can be the same, but the phone numbers should be unique
There is a login page, and you can only access your app if you gave the right credentials, and once you login It saves some mock token to a cookie so we dont have to log in every time we reload.

## Development server

Run `ng serve` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Github deployment steps are as on https://www.c-sharpcorner.com/blogs/a-guide-on-how-to-deploy-angular-applications-to-github-pages

## Backend

There is a small express server to manage contacts. [Backend](https://github.com/hajdun/contact-api)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
