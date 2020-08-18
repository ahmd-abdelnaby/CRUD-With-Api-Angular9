import { Component, OnInit } from '@angular/core';
import { IPost } from '../Cutom DataTypes/ipost';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit {
  id: any;
  post:IPost;
  constructor(private service : PostService,private route: ActivatedRoute) { 
    this.post={body:'',title:'',id:'',userId:''};
  }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.service.getPostByID(this.id).subscribe(
      (res)=>{console.log(res);this.post=res;},
      (err)=>{console.log(err)}
    );
  }
  delete(id)
  {
    this.service.Delete(id).subscribe(
      (res)=>{alert("Deleted")},
      (err)=>{console.log(err)}
    );
  }

}
