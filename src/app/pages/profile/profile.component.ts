import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any = new User();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getlocalStorageUserInf();
  }

  getlocalStorageUserInf() {
    let user = localStorage.getItem('userInformation');
    this.user.name = user != undefined ? JSON.parse(user).name : '';
    this.user.surname = user != undefined ? JSON.parse(user).surname : '';
    this.user.title = user != undefined ? JSON.parse(user).title : '';
    this.user.image_url = user != undefined ? JSON.parse(user).image_url : '';
  }

  logout() {
    this.authService.logout();
  }
}
