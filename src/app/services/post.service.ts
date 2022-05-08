import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts' ;


  constructor(private http:HttpClient) { }


  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post:any) {
    return this.http.post(this.url,JSON.stringify(post));
  }

  updatePost(post:any) {
    // return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead:true}));
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post))
  }

  deletePost(id:any) {
    // console.log(this.url + '/' + id);
    if (id <= 100 && id >=1){
      console.log(id);
      return this.http.delete(this.url + '/' + id );
    }  
    else{
      console.log(id);
      return this.http.delete(this.url + '/' );
    }
    
    // .pipe(
    //   catchError(this.handleError)
    // )
  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `, error.error);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(() => new Error('Something bad happened; please try again later.'));
  // }

}