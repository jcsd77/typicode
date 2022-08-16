import { Component, OnInit } from '@angular/core';
import { TypicodeService } from 'src/app/services/typicode.service';
import { faPen, faTrashCan, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

interface Usuario {
  id: number;
  name: string;
  username: string;
  phone: string;
  email: string;
  website: string;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  faPen = faPen;
  faTrashCan = faTrashCan;
  faMagnifyingGlass = faMagnifyingGlass; 
  usuarios: Usuario[] = [];

  constructor(private TypicodeService: TypicodeService, private _router: Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers() {
    //debugger;

    this.TypicodeService.getUsers().subscribe(resp => {
      //debugger;
      if (resp) {
        resp.forEach((element) => {
          let usuarios: Usuario = {
            id : element['id'],
            name: element['name'],
            username: element['username'],
            phone: element['phone'],
            email: element['email'],
            website: element['website']
          }
          //debugger;

          this.usuarios.push(usuarios);
        });
      }
    })


  }

  remove(user){
    this.TypicodeService.DeleteUser(user).subscribe(resp => {
      if (resp) {
        debugger;
        this._router.navigate(["/home"]);
      }
    })
  }

  

}
