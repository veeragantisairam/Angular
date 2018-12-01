import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  posts: any = [];
  constructor(private service: ApiService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.service.get().subscribe(data => {
      // console.log(data)
      this.posts = data;
      //console.log(this.posts)
    })
  }


  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';
    console.log(post)

    // post function
    this.service.createpost(post)
      .subscribe(response => {
        post['id'] = response;
        console.log(post['id'])
        this.posts.splice(0, 0, post)
      })
  }

  updatePost(post){
    this.service.updatepost(post).subscribe(response=>{
      console.log(response);
    })
  }
  onRelaod(){
    // this.router.navigate(['/contact'],{relativeTo:this.route})
  }

}
