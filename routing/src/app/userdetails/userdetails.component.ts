import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { ApiService } from '../api.service';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userdetails:any;
  constructor(private route:ActivatedRoute, private userid:ApiService) { }

  ngOnInit() {
    let id= this.route.snapshot.params['id'];
    this.userid.getuserBYID(id).subscribe(res=>{
      console.log(res);
      this.userdetails=res
    });
  }

}
