import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { TypicodeService } from 'src/app/services/typicode.service';

//import { AlertService, UserService, AuthenticationService } from '../_services';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private TypicodeService: TypicodeService,
    private _router: Router


  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required]],
      website: ['', [Validators.required]]

    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

 

  createUsr() {
    let usr = {
      name: String(this.registerForm.get('name').value),
      username: String(this.registerForm.get('username').value),
      phone: String(this.registerForm.get('phone').value),
      email: String(this.registerForm.get('email').value),
      website: String(this.registerForm.get('website').value),
    }
    debugger;
    
    this.TypicodeService.createUser(usr).subscribe(resp => {
      debugger;
      if (resp) {
        console.log(resp)
        this._router.navigate(["/home"]);
      }

    })
  }
}
