import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/local.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: Object = {
    name: '',
    role: ''
  }
  constructor(
    private local: LocalService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createUser() {
    this.local.postUser(this.user).subscribe( (data) => {
      console.log('created');
      console.log(data);
      this.router.navigate(['/users'])
    })
  }

}
