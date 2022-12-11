import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DeviceComponent } from './device/device.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './error/error.component';
import { routers } from './app.routers';
import { DetailComponent } from './device/detail/detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeviceComponent,
    UserComponent,
    NotFoundComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
