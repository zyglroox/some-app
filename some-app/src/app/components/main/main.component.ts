import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  posts$ = [
    {id: 1, name: 'Funny post', text: 'some meme post everyone\'s laughing', rating: 92 },
    {id: 2, name: 'Some other funny post', text: 'some boyan but maybe ol\' good stuff', rating: 0 },
    {id: 3, name: 'Serious post', text: 'ples help very interesting situation', rating: 204 }
  ];

  constructor() {
  }

  upVote(id) {
    this.getPost(id).rating++;
  }

  downVote(id) {
    this.getPost(id).rating--;
  }

  getPost(id) {
    return this.posts$.find(p => p.id === id);
  }

  ngOnInit() {
  }

}
