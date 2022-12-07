import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DeviceComponent } from './device/device.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './error/error.component';
import { routers } from './app.routers';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeviceComponent,
    UserComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
