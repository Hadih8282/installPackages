import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  ////////////////////////////////////////////
  // (1)

  posts: any;
  
  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
        // console.log(response);
        
      });
  }

  ////////////////////////////////////////////////////////////////////////////////
  // (2)


  // createPost(input: HTMLInputElement) {
  //   let post:any = {title: input.value};
  //   this.posts.splice(0, 0, post);
  //   input.value = '';

  //   this.service.createPost(post)
  //     .subscribe((response:any) => {
  //       post.id = response.id;
        
  //       console.log(response,post);
  //     });
  // }

  //////////////////////////////////////////////////////////////////////////////////
  // (3)

  
  // updatePost(post:any) {
  //   this.service.updatePost(post)
  //     .subscribe(response => {
  //       console.log(response);  
  //     })
  // }

  //////////////////////////////////////////////////////////////////////////////////
  // (4)


  deletePost(post:any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    
    this.service.deletePost(post.id)
      .subscribe(null,
      (error:Response) => {
        if(error.status === 404){
          alert(' This post has already been deleted')
          console.log(error);
        }  
        else throw error;
      });
  }

  //////////////////////////////////////////////////////////////////////////////////
  // (5)?

  // deletePost(post:any) {
  //   this.service.deletePost(post.id)
  //     .subscribe(
  //       response => {
  //         let index = this.posts.indexOf(post);
  //         this.posts.splice(index, 1); 
  //         // console.log(response);
  //       },(error: Response) => { 
  //         if (error.status === 404)
  //           alert('This post has already been deleted.');
  //         else {
  //           alert('An unexpected error occurred');
  //           console.log(error);
  //         }
  //       });
  // }
}


