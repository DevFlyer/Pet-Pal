import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { formContainer } from 'aws-amplify';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  username: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
  }

  public signInUser() {
    this.authService.SignIn(this.username.value, this.password.value)
  }

}
