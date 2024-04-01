import {
  inject,
  Injectable,
} from '@angular/core';
import {
  Auth,
  authState,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

import {
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from 'firebase/auth';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  userData ?: User;
  private auth: Auth = inject(Auth);
  authState$ = authState(this.auth);
  constructor(
    public router: Router
  ) {
    /* Saving user data in localstorage when logged in and setting up null when logged out */
    this.authState$.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem("user", JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem("user")!);
      } else {
        localStorage.setItem("user", "null");
        JSON.parse(localStorage.getItem("user")!);
      }
    });
  }

  signInGoogle() {
    return this.authLogin(new GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(["dashboard"]);
    });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user")!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  // Auth logic to run auth providers
  authLogin(provider: any) {
    return signInWithPopup(this.auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  // Sign out
  signOut() {
    return this.auth.signOut().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(["/"]);
    });
  }
}
