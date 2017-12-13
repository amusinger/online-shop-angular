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

  mail2: string;
  password2: string;
  registered = false;

  ngOnInit() {
    this.isOnline();
    console.log('hey');
  }

  isOnline(){
    var userID = localStorage.getItem("userID");
    this.profile.isOnline(userID).then(data => {
      if(data){
        this.myProfile = data;
        
      }
      else{
        this.myProfile = null;
      }
     
    });
  }

  Login(){
    this.profile.LoginUser(this.mail, this.password).then(data => {
      this.myProfile = data;
      localStorage.setItem("userID", this.myProfile.id);
    });
  }

  Register(){
    this.profile.RegisterUser(this.mail2, this.password2).then(data => {
      this.myProfile = data;
      this.registered = true;
    });
  }

  Logout(email: string){
    this.profile.LogoutUser(email).then(data => {
      this.myProfile = data;
      localStorage.removeItem("userID");
    });
  }

}
