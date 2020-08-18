import { Component, OnInit } from '@angular/core';
import { IPost } from '../Cutom DataTypes/ipost';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.css']
})
export class DisplayPostComponent implements OnInit {

  constructor(private service : PostService) { }
  Posts:IPost[]
  ngOnInit(): void {
    this.service.getAllPosts().subscribe(
      (res)=>{console.log(res);this.Posts=res;},
      (err)=>{console.log(err)}
    );
  }

}
