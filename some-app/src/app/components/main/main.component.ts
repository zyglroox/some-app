import { MainService } from './../../services/main/main.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  posts$;

  constructor(private main: MainService) {
    this.posts$ = main.getPosts();
  }

  ngOnInit() {
  }

}
