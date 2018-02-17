import { MainService } from './../../services/main/main.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() public post$;

  constructor(private main: MainService) { }

  upVote(id) {
    this.main.upVote(id);
  }

  downVote(id) {
    this.main.downVote(id);
  }

  removePost(id) {
    this.main.removePost(id);
  }

  ngOnInit() {
  }

}
