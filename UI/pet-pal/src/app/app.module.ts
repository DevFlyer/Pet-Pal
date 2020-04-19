import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import { TimelineComponent } from './timeline/timeline.component';
import { PostComponent } from './post/post.component';
import { PostStepperComponent } from './post/post-stepper/post-stepper.component';


const appRoutes: Routes = [
  { path: 'timeline', component: TimelineComponent },
  { path: 'post', component: PostStepperComponent },
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
    PostStepperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatStepperModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
