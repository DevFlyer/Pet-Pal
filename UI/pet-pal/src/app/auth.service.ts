import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor(private router: Router) { }

  public async SignIn(username: string, password: string) {
    try {
      this.user = await Auth.signIn(username, password);
      if (this.user) {
        this.router.navigate(['/timeline']);
      }
    }
    catch (error) {
      console.log(error);
      this.router.navigate(['/notauthorized']);
    }

  };

  public async SignOut() {
      try {
        await Auth.signOut({ global: true });
        this.user = undefined;
        this.router.navigate(['/signin']);
      } catch (error) {
        console.log(error);
      }
  }

  userSignedIn() {
    return this.user !== undefined;
  }
}
