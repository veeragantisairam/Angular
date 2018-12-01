import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

getdata():Observable<any>{
  return this.http.get("https://jsonplaceholder.typicode.com/users")
                      .catch((error)=>{
                        //console.log(error)
                        return Observable.throw(error);
                      })
              
}
getuserBYID(id:number){
  return this.http.get("https://jsonplaceholder.typicode.com/users/" + id)
}

get(){
  return this.http.get("https://jsonplaceholder.typicode.com/posts")
}
createpost(post){
  return this.http.post("https://jsonplaceholder.typicode.com/posts",JSON.stringify(post))
}
updatepost(post){
  return this.http.patch("https://jsonplaceholder.typicode.com/posts" + '/' + post.id ,JSON.stringify({isRead:true}))

}

}
