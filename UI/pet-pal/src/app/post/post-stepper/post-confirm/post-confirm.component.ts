import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PostService } from '../../post.service';
import { Post } from 'src/app/models/post';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-post-confirm',
  templateUrl: './post-confirm.component.html',
  styleUrls: ['./post-confirm.component.scss']
})
export class PostConfirmComponent implements OnInit {
  private eventSubscription: Subscription;
  
  @Input() postForm: FormGroup;
  @Input() events: Observable<void>;
  postText:string;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    console.log('in confirm ngOnInit');
    this.postText = this.postForm.controls.text.value;
    console.log(this.postText);
    this.eventSubscription = this.events.subscribe(() => this.submitForm());
  }

  get formText() {
    return this.postForm.controls.text.value;
  }

  get imageSource() {
    return this.postForm.controls.image.value;
  }

  submitForm() {
    console.log("form submitted");
    let post:Post = {
      text: this.postText,
      image: this.postForm.controls.image.value,
      id: 0
    }
    this.postService.savePost(post)
      .subscribe();
  }
}
