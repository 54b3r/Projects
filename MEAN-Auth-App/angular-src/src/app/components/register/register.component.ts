import { Component, OnInit } from '@angular/core';
import { ValidateService} from '../../services/validate.service'
//flash message Service to use this
import { FlashMessagesService } from 'angular2-flash-messages'
//bring in the auth service
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  constructor(
    private validateService: ValidateService, 
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }
    //required fields
    if(!this.validateService.ValidateRegister(user)) {
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout:3000});
      return false
    }
    if(!this.validateService.ValidateEmail(user.email)) {
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout:3000});
      return false
    } 
    this.authService.registerUser(user).subscribe(data => {
      if(data){
        console.log(data)
        this.flashMessage.show('You are now registered and may now log in', {cssClass: 'alert-success', timeout:3000});
        this.router.navigate(['login'])
        //the user is logged in so we are taking them to the login page
      }else {
        this.flashMessage.show('Something has gone terribly wrong, please try again', {cssClass: 'alert-danger', timeout:3000});
        
      }
    })
  }
  
}
