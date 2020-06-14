import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TimelineComponent } from './timeline/timeline.component';
import { PostComponent } from './post/post.component';
import { PostStepperComponent } from './post/post-stepper/post-stepper.component';
import { StepTemplateComponent } from './post/post-stepper/step-template/step-template/step-template.component';
import { PostTextComponent } from './post/post-stepper/post-text/post-text.component';
import { PostConfirmComponent } from './post/post-stepper/post-confirm/post-confirm.component';
import { PostImageComponent } from './post/post-stepper/post-image/post-image.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostService } from './post/post.service';
import { HttpClientModule } from '@angular/common/http';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';

Amplify.configure(awsconfig);


const appRoutes: Routes = [
  { path: 'timeline', component: TimelineComponent },
  { path: 'post', component: PostStepperComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signout', component: SignOutComponent },
  { 
    path: '',
    redirectTo: '/timeline',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    PostComponent,
    PostStepperComponent,
    StepTemplateComponent,
    PostTextComponent,
    PostConfirmComponent,
    PostImageComponent,
    SignOutComponent,
    SignInComponent,
    HeaderComponent,
    NotauthorizedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    AmplifyUIAngularModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
