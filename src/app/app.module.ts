import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TriviaGameComponent } from './trivia-game/trivia-game.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'trivia', component: TriviaGameComponent },
  { path: 'implicit/callback', component: OktaCallbackComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

const oktaConfig = {
  issuer: 'dev-55555894.okta.com',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oavytx3xnfZF44eb5d6'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TriviaGameComponent
  ],
imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    OktaAuthModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
