import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-stepper',
  templateUrl: './post-stepper.component.html',
  styleUrls: ['./post-stepper.component.scss']
})
export class PostStepperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("In stepper on ngOnInit")
  }

}
