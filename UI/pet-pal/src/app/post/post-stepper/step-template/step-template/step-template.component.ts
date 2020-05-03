import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-template',
  templateUrl: './step-template.component.html',
  styleUrls: ['./step-template.component.scss']
})
export class StepTemplateComponent implements OnInit {

  @Input() title:string;
  @Input() instructions: string;
  @Input() stepType:string;
  constructor() { }

  ngOnInit(): void {
  }

}
