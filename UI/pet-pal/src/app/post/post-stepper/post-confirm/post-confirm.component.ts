import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-confirm',
  templateUrl: './post-confirm.component.html',
  styleUrls: ['./post-confirm.component.scss']
})
export class PostConfirmComponent implements OnInit {
  @Input() postForm: FormGroup;
  postText:string;
  constructor() { }

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
    //this.postService.submitPost()
  }
}
