import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages'
import { error } from 'protractor';
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  data: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }
    const data = {
    }
    this.authService.authenticateUser(user).subscribe(data => { 
      
      data.hasOwnProperty('success')
      if(data) {
        console.log(data.user)
        this.authService.storeUserData(data.token, data.user)
        console.log(data)
        this.flashMessage.show('You have successfully logged in!',{cssClass: 'alert-success', 
        timeout:5000})
        this.router.navigate(['dashboard'])

      }else {
        this.flashMessage.show(
          '',
          {cssClass: 'alert-danger', 
            timeout:5000
          }
        );
        this.router.navigate(['login'])
      }
    })
  }
}
//