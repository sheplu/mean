import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private http: HttpClient) { }

  getAllUsers<Observable>() {
    return this.http.get('http://localhost:3000/users')
  }

  getOneUser<Observable>(id: string) {
    return this.http.get(`http://localhost:3000/users/${id}`)
  }

  postUser(user) {
    return this.http.post('http://localhost:3000/users', user)
  }

  deleteOneUser<Observable>(id: string) {
    return this.http.delete(`http://localhost:3000/users/${id}`)
  }

  updateOneUser<Observable>(user: object) {
    return this.http.put('http://localhost:3000/users/', user)
  }

}
