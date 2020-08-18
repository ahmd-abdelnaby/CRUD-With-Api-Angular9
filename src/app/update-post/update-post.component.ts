import { Component, OnInit } from '@angular/core';
import { IPost } from '../Cutom DataTypes/ipost';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
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

  Update()
  {
    this.service.Update(this.post,this.id).subscribe(
      (res) => {alert('Done') },
      (err)=>{console.log(err);},
    );
  }

}
