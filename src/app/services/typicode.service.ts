import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TypicodeService {

  private urlgetUsers = '/users/';
  //private urlgetUser = '/users/`${id}`';
  
  constructor(private http: HttpClient) { }

  getUsers() {
    debugger;
    return this.http.get<any>(this.getUrl(this.urlgetUsers));
  }

  getUser(userid: number) {
    // debugger;
    // let id = userid;
    // let url = this.urlgetUser;
    return this.http.get<any>(this.getUrl(this.urlgetUsers.concat(userid.toString())));
    //return this.http.get<any>(this.getUrl(url));
  }

  getUrl(_url: string): string {
    return 'https://jsonplaceholder.typicode.com' + _url;
  }



}
