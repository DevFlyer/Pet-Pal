import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReadVarExpr } from '@angular/compiler';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.scss']
})
export class PostImageComponent implements OnInit {

  @Input() postForm: FormGroup;
  imageSource:any;
  
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  openInput(){ 
    document.getElementById("fileInput").click();
  }

  fileChange(files: FileList) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    // this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imageSource = reader.result; 
      this.postForm.patchValue({
        image: this.imageSource
      });
      // this.cd.markForCheck();
    }
  }
}
