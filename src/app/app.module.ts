import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserInformationBarComponent } from './user-information-bar/user-information-bar.component';
import { VideosScreensComponent } from './videos-screens/videos-screens.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserInformationBarComponent,
    VideosScreensComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
