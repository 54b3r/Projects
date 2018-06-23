import { Injectable } from '@angular/core';
import { HttpModule, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs/observable'
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  title: 'authService'
  authToken: any;
  user: any;
  data: any=[];
  constructor(private http:HttpClient) { }

  registerUser(user) {
    //create and inject the content type into the header(we do this in postman when setting the header)
    let headers = new HttpHeaders;
    headers.append('Content-Type','application/json')
    //HTTP post request with headers
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
  }
  authenticateUser(user) {
    let headers = new HttpHeaders;
    headers.append('Content-Type','application/json')
    //HTTP post request with headers
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
  }
  getProfile() {
    let headers = new HttpHeaders;
    var newToken = JSON.stringify(this.loadToken())
    //headers.set('origin', 'true')
    //headers.set('method', ['GET','POST','PUT'])
    headers.append('Authorization', 'Bearer '+ JSON.stringify(this.authToken))
    headers.append('Content-Type','application/json')
    return this.http.get('http://localhost:3000/users/profile', {headers: headers})

  }
  storeUserData(token, user) {
    var usrHist = JSON.parse(localStorage.getItem('id_token')) || [];
    localStorage.setItem('id_token', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(user))
    console.log(localStorage.getItem('id_token'))
    console.log(localStorage.getItem('user'))
  }
  //fetch token from local storage
  loadToken() {
    const token = localStorage.getItem('id_token')
    this.authToken = token;
  }
  loadUser() {
    const getUser = localStorage.getItem('user')
    this.user = getUser
  }
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}




