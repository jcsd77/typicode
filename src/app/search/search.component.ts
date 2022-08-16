import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TypicodeService } from 'src/app/services/typicode.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  id: string;
  searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private TypicodeService: TypicodeService
  ) { }

  ngOnInit(): void {

    this.searchForm = this.formBuilder.group({
      companyname: ['', Validators.required],
      catchPhrase: ['', Validators.required],
      bs: ['', Validators.required],
      street: ['', [Validators.required]],
      suite: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zipcode: ['', [Validators.required]]
    }, {

    });

    this.loadSearch();
  }

  loadSearch() {

    this.id = this.route.snapshot.params['id'];
    this.TypicodeService.getUser(this.id).subscribe(element => {
      debugger;
      if (element) {

        let item = {
          street: element.address.street,
          suite: element.address.suite,
          city: element.address.city,
          zipcode: element.address.zipcode,
          companyname: element.company.name,
          catchPhrase: element.company.catchPhrase,
          bs: element.company.bs
        }

        this.searchForm.setValue({
          street: item.street,
          suite: item.suite,
          city: item.city,
          zipcode: item.zipcode,
          companyname: item.companyname,
          catchPhrase: item.catchPhrase,
          bs: item.bs
        });
      }


    });
  }



}
