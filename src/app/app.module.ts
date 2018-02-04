import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FileTransfer} from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
//pages
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { UserAddPage } from '../pages/users/users-add/user-add';
import { UserRegisterPage } from '../pages/users/register/user-register';
import { RegisterThanks } from '../pages/users/register-thanks/register-thanks';
import { UserListPage } from '../pages/users/users-list/user-list';
import { UserEditPage } from '../pages/users/users-edit/user-edit';
import { VerifyTokenPage } from '../pages/users/verify-token/verify-token';
import { PostViewPage } from '../pages/post/view-post/view-post';
import { ForgotPassPage } from '../pages/users/forgot-pass/forgot-pass';
import { FeedbackPage } from '../pages/feedback/feedback';
import { FeedbackThankYouPage } from '../pages/feedback_thankyou/thankyou';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';


// shared
import { ApiService } from '../shared/api.service';
import { SidebarNav } from '../shared/sidebar/sidebar';
import { Base64 } from '@ionic-native/base64';
// import firebase from 'firebase';
//providers
// import { UtilService } from '../providers/utils.service';
// import { SocketService } from '../providers/socket.service';
import {SocketService, UtilService} from "../providers";

 const firebaseConfig = {
            apiKey: "AIzaSyBH_hBgUME25UVzGYE7sani2eYrgGiyh4M",
            authDomain: "test-6148c.firebaseapp.com",
            databaseURL: "https://test-6148c.firebaseio.com",
            projectId: "test-6148c",
            storageBucket: "test-6148c.appspot.com",
            messagingSenderId: "469373891917"
          //   apiKey: 'AIzaSyC1tBMy-SERawwY4F5WBwrUdKajXrLkuxA',
          // authDomain: 'pushnotification-1092d.firebaseapp.com',
          // databaseURL: 'https://pushnotification-1092d.firebaseio.com',
          // projectId: 'pushnotification-1092d',
          // storageBucket: 'pushnotification-1092d.appspot.com',
          // messagingSenderId: '134945683401'
          };

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
    RegisterThanks,
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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule

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
    RegisterThanks,
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
    Camera,
    File,
    FileTransfer,
    FilePath,
    Base64,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
