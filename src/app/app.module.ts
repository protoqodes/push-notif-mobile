import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
//pages
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { UserAddPage } from '../pages/users/users-add/user-add';
import { UserRegisterPage } from '../pages/users/register/user-register';
import { UserListPage } from '../pages/users/users-list/user-list';
import { UserEditPage } from '../pages/users/users-edit/user-edit';
import { VerifyTokenPage } from '../pages/users/verify-token/verify-token';

// shared
import { ApiService } from '../shared/api.service';

//providers
import { UtilService } from '../providers/utils.service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    UserAddPage,
    UserListPage,
    UserEditPage,
    UserRegisterPage,
    VerifyTokenPage
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
    UserEditPage,
    UserRegisterPage,
    VerifyTokenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiService,
    UtilService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
