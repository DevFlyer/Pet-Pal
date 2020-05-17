import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-stepper',
  templateUrl: './post-stepper.component.html',
  styleUrls: ['./post-stepper.component.scss']
})
export class PostStepperComponent implements OnInit {

  imageStep: string;
  imageInstructions: string;
  postTextStep: string;
  postTextInstructions: string;
  confirmStep: string;
  confirmInstructions: string;
  image: string;
  text: string;
  confirm: string;
  postForm:FormGroup = new FormGroup({
    image: new FormControl(''),
    text: new FormControl('')
  });
  imageStepButtonText: string;
  textStepButtonText: string;
  confirmStepButtonText: string;
  
  constructor() { }

  ngOnInit(): void {
    console.log("In stepper on ngOnInit")
    this.imageStep = "Share A Moment";
    this.postTextStep = "Share A Thought";
    this.confirmStep = "Share To All";
    this.image = "image";
    this.text = "text";
    this.confirm = "confirm";

    this.imageInstructions = "What is your furry friend up to now? Upload an image.";
    this.postTextInstructions = "What is your furry friend doing? Type about it the text box below";
    this.confirmInstructions = "Make sure this is what you want to share and send it out.";

    this.imageStepButtonText = "Add Text To Post";
    this.textStepButtonText = "Confirm Post";
    this.confirmStepButtonText = "Upload Post";
  }

}
