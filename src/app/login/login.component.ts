import { NgIf } from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';

import { ButtonModule } from 'primeng/button';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports:[ButtonModule, NgIf]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService){}
  get isLoggedIn()  {
    return this.authService.isLoggedIn
  };

  ngOnInit(): void {
    // !this.authService.isLoggedIn && this.authService.signInGoogle();
  }

  signOut(){
    this.authService.signOut();
  }

  signIn(){
    this.authService.signInGoogle();
  }

}
