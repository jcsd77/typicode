import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TypicodeService {

  private urlgetUsers = '/users/';

  constructor(private http: HttpClient) { }


  //Consultar usuarios
  getUsers() {
    return this.http.get<any>(this.getUrl(this.urlgetUsers));
  }
  //Consultar usuario
  getUser(userid: string) {
    return this.http.get<any>(this.getUrl(this.urlgetUsers.concat(userid.toString())));
  }
  //Crear usuario
  createUser(user) {
    return this.http.post<any>(this.getUrl(this.urlgetUsers), user);
  }
  //Actualizar usuario
  UpdateUser(user) {
    debugger;
    return this.http.put<any>(this.getUrl(this.urlgetUsers.concat(user.id)), user);
  }
  //Eliminar usuario
  DeleteUser(user) {
    return this.http.delete<any>(this.getUrl(this.urlgetUsers.concat(user.id)), user);
  }

  getUrl(_url: string): string {
    return 'https://jsonplaceholder.typicode.com' + _url;
  }
}
