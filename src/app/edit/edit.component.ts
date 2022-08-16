import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { TypicodeService } from 'src/app/services/typicode.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form: FormGroup;
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private TypicodeService: TypicodeService
  ) { }

  ngOnInit() {
    debugger;



    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      website: ['', Validators.required]
    }, {

    });

    this.loadUser();
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {


  }

  loadUser() {
    this.id = this.route.snapshot.params['id'];
    this.TypicodeService.getUser(this.id).subscribe(element => {
      //debugger;
      if (element) {

        let user = {
          id: element['id'],
          name: element['name'],
          username: element['username'],
          phone: element['phone'],
          email: element['email'],
          website: element['website']
        }

        this.form.setValue({
          name: user.name,
          username: user.username,
          phone: user.phone,
          email: user.email,
          website: user.website

        });
      }
    });
  }


  updateUser() {

    let usr = {
      id : this.id,
      name: String(this.form.get('name').value),
      username: String(this.form.get('username').value),
      phone: String(this.form.get('phone').value),
      email: String(this.form.get('email').value),
      website: String(this.form.get('website').value),
    }

    this.TypicodeService.UpdateUser(usr).subscribe(element => {
      //debugger;
      if (element) {
        debugger;
        let user = {
          id: element['id'],
          name: element['name'],
          username: element['username'],
          phone: element['phone'],
          email: element['email'],
          website: element['website']
        }

        this.form.setValue({
          name: user.name,
          username: user.username,
          phone: user.phone,
          email: user.email,
          website: user.website

        });
      }
    });
  }

}
