import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private profile: RequestService) { }

  myProfile;
  mail: string;
  password: string;

  ngOnInit() {
    this.isOnline();
    console.log('hey');
  }

  isOnline(){
    this.profile.isOnline().then(data => {
      if(data){
        this.myProfile = data;
      }
      else{
        this.myProfile = null;
      }
     
    });
  }

  Login(){
    this.profile.LoginUser(this.mail, this.password).then(data => this.myProfile = data);
  }

  Logout(email: string){
    this.profile.LogoutUser(email).then(data => this.myProfile = data);
  }

}
