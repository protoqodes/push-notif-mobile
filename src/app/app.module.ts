import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
//pages
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { UserAddPage } from '../pages/users/users-add/user-add';
import { UserListPage } from '../pages/users/users-list/user-list';
import { UserEditPage } from '../pages/users/users-edit/user-edit';
// shared
import { ApiService } from '../shared/api.service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    UserAddPage,
    UserListPage,
    UserEditPage
  ],
  imports: [
    BrowserModule,
     HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    UserAddPage,
    UserListPage,
    UserEditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
