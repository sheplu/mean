import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {

  user: Object;
  isFound = false;
  constructor(
    private local: LocalService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.params.subscribe( (url) => {
      this.local.getOneUser(url.id).subscribe( (data) => {
        this.user = data;
        this.isFound = true;
      })
    })
  }

}
