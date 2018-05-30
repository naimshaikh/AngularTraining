import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HelpService {
  url: string;
  constructor(private http: HttpClient) {
      this.url = 'http://192.168.0.78:8080/selenium/feedback';
  }
  addUser(formObj: any): any {
    console.log(formObj)
      return this.http.post(this.url, formObj);
  }
}

