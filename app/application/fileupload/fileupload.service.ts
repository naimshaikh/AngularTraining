import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class FileuploadService {
constructor(private http:HttpClient) { }
getReport() {
const getUrl = 'http://192.168.0.78:8080/selenium/reports/reportByUsername';
const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    };
const authPromise = new Promise<any>(
    (resolve, reject) => {
       this.http.post<any>(getUrl, httpOptions).subscribe(
          (response) => {
          resolve(response);
        },
          (error: HttpResponse<any>) => {
          reject(error);
        }
      );
    }
  );
  return authPromise;
}
}
