import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PostService } from '../../post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-confirm',
  templateUrl: './post-confirm.component.html',
  styleUrls: ['./post-confirm.component.scss']
})
export class PostConfirmComponent implements OnInit {
  @Input() postForm: FormGroup;
  postText:string;
  postService: PostService;
  constructor(postService: PostService) { }

  ngOnInit(): void {
    console.log('in confirm ngOnInit');
    this.postText = this.postForm.controls.text.value;
    console.log(this.postText);
  }

  get formText() {
    return this.postForm.controls.text.value;
  }

  get imageSource() {
    return this.postForm.controls.image.value;
  }

  submitForm() {
    let post:Post = {
      text: this.postText,
      image: this.postForm.controls.image.value,
      id: 0
    }
    this.postService.savePost(post)
      .subscribe();
  }
}
