import { NgModule } from '@angular/core';
import {
  initializeApp,
  provideFirebaseApp,
} from '@angular/fire/app';
import {
  getAuth,
  provideAuth,
} from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {
  getFirestore,
  provideFirestore,
} from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';

import firebaseConfig from 'src/constants/firebaseConfig';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(()=>getAuth()),
    LoginComponent,
    DashboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
