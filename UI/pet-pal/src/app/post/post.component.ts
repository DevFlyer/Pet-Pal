import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post: Post = new Post();
  constructor() { }

  ngOnInit(): void {
    this.post.imageUrl = './assets/images/kitten.jfif';
    this.post.text = `Palo santo lumbersexual woke DIY marfa 
                      shaman disrupt. Marfa everyday carry irony listicle 
                      meggings hashtag austin, mustache kombucha. Raclette 
                      brooklyn activated charcoal vaporware. Pitchfork bespoke 
                      la croix green juice seitan occupy vinyl gastropub pok pok 
                      raw denim four dollar toast cold-pressed taxidermy neutra. 
                      Church-key helvetica migas, next level YOLO cornhole la 
                      croix kale chips slow-carb blog fixie vaporware. 
                      Brunch master cleanse pok pok 90's keytar pinterest 
                      letterpress dreamcatcher.`;
  }

}
