import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalService } from './local.service';
import { UserComponent } from './user/user.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { UserShowComponent } from './user/user-show/user-show.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ LocalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
