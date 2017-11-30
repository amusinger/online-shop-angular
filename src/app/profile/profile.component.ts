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

  ngOnInit() {
    this.profile.LoginUser('aiyerimbetova@gmail.com', '12345').then(data => this.myProfile = data);
    console.log('hey');
  }

}
