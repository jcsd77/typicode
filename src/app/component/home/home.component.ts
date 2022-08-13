import { Component, OnInit, Input } from '@angular/core';
import { TypicodeService } from 'src/app/services/typicode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private TypicodeService: TypicodeService) { }

  ngOnInit(): void {
    this.test();
  }

  test() {
    debugger;
    this.TypicodeService.getUser(1).subscribe(resp => {
      debugger;
      var bar = resp;

    })
    //   this.TypicodeService.getUsers().subscribe(resp =>{  
    //     debugger;
    //     var bar = resp; 

    // })


  }

}
