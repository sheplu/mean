import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/local.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user: Object;
  isFound = false;
  constructor(
    private local: LocalService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe( (url) => {
      this.local.getOneUser(url.id).subscribe( (data) => {
        this.user = data;
        this.isFound = true;
      })
    })
  }

  updateUser() {
    this.local.updateOneUser(this.user).subscribe( (data) => {
      console.log('updated');
      console.log(data);
      this.router.navigate(['/users'])
    })
  }

}
