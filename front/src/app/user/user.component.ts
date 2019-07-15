import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Array<Object> = []
  constructor(private local: LocalService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  deleteUser(id) {
    this.local.deleteOneUser(id).subscribe( (data) => {
      console.log('deleted');
      console.log(data);
      this.getAllUsers();
    })
  }

  getAllUsers() {
    this.local.getAllUsers().subscribe( (data: Array<Object>) => {
      this.users = data;
      console.log(data);
    })
  }

}
