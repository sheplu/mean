import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { UserShowComponent } from './user/user-show/user-show.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserComponent,
    children: [
      {
        path: 'create',
        component: UserCreateComponent
      },
      {
        path: 'update/:id',
        component: UserUpdateComponent
      },
      {
        path: 'show/:id',
        component: UserShowComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
