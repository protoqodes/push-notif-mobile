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
import { PostViewPage } from '../pages/post/view-post/view-post';
import { ForgotPassPage } from '../pages/users/forgot-pass/forgot-pass';
import { FeedbackPage } from '../pages/feedback/feedback';
import { FeedbackThankYouPage } from '../pages/feedback_thankyou/thankyou';

// shared
import { ApiService } from '../shared/api.service';
import { SidebarNav } from '../shared/sidebar/sidebar';
//providers
// import { UtilService } from '../providers/utils.service';
// import { SocketService } from '../providers/socket.service';
import {SocketService, UtilService} from "../providers";

@NgModule({
  declarations: [
    MyApp,
    SidebarNav,
    LoginPage,
    HomePage,
    UserAddPage,
    UserListPage,
    UserEditPage,
    UserRegisterPage,
    VerifyTokenPage,
    PostViewPage,
    VerifyTokenPage,
    ForgotPassPage,
    FeedbackPage,
    FeedbackThankYouPage
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
    SidebarNav,
    LoginPage,
    HomePage,
    UserAddPage,
    UserListPage,
    UserEditPage,
    UserRegisterPage,
    VerifyTokenPage,
    PostViewPage,
    VerifyTokenPage,
    ForgotPassPage,
    FeedbackPage,
    FeedbackThankYouPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiService,
    UtilService,
    SocketService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
