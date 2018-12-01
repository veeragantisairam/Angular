import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any[]=[];
  errormsg: any;
  constructor(private service: ApiService, private router:Router) { }

  ngOnInit() {
    this.service.getdata().subscribe(data => {
      this.users = data;
    }, (err) => {
      this.errormsg = err;
     console.log(err)
    console.log(this.errormsg)
            
    });
  }

  onLoadAbout(){
    this.router.navigate(['/contact'])
  }

}
