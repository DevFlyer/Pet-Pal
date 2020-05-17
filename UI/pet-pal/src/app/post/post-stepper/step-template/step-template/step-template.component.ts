import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-step-template',
  templateUrl: './step-template.component.html',
  styleUrls: ['./step-template.component.scss']
})
export class StepTemplateComponent implements OnInit {

  @Input() title:string;
  @Input() instructions: string;
  @Input() stepType:string;
  @Input() postForm:FormGroup;
  @Input() nextStepButtonText: string;

  eventSubject: Subject<void> = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
  }

  advanceStepper(stepType) {
    if (stepType === 'confirm') {
      this.eventSubject.next();
    }
  }

}
