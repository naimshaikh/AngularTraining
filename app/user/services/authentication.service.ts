// import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class AuthenticationService {
  redirectUrl: string;
  //take behaviior subject to send data to another comp
  private uname = new BehaviorSubject<any>(null);
  public uname$ = this.uname.asObservable();

  constructor(private http:  HttpClient) { }
    // For Login Api calling :
  login(user) {
   const loginUrl = ' http://192.168.0.78:8080/selenium/login';
   const httpOptions = {
      headers: new HttpHeaders({
     'Content-Type': 'application/json'
      })
     };
  const body = {
    'username': user.username,
    'password': user.password
    };
  const authPromise = new Promise<any>(
    (resolve, reject) => {
    // Perform a get request to authenticate the user.
    this.http.post<any>(loginUrl, body, httpOptions).subscribe(
   // Callback  when the response was successfully received from the server.
   //  It resolves the promise and passes on the data.
     (response) => {
        resolve(response);
    },
    // Callback  when an error object was sent by the server. It rejects the promise and passes on the error.
    (error: HttpResponse<any>) => {
      reject(error);
        });
     });
  return authPromise;
    }
    setuname(response) { 
      this.uname.next(response)
    }
  logout() {
     localStorage.clear();
    // localStorage.removeItem('authority');
    // localStorage.removeItem('user');
  }
  
}