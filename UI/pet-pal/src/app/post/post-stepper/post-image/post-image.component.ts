import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.scss']
})
export class PostImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openInput(){ 
    document.getElementById("fileInput").click();
  }

  fileChange(event: FileList) {
    if(event.length > 0) {
        let file: File = event[0];
        console.log(file);
    }
  }
}
