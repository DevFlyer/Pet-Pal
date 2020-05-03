import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-text',
  templateUrl: './post-text.component.html',
  styleUrls: ['./post-text.component.scss']
})
export class PostTextComponent implements OnInit {
  @Input() postForm: FormGroup;
  
  public postText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
