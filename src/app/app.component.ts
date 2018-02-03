import { Component, ViewChild } from '@angular/core';
import { Platform, Nav,NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import {FeedbackPage} from '../pages/feedback/feedback';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage:any = LoginPage;
  @ViewChild(Nav) nav:Nav;
  @ViewChild('test') navCtrl:NavController;
  has_login:Boolean = false;
  errorMessage:String;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private storage: Storage) {
    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      const firebaseConfig = {
            apiKey: "AIzaSyBH_hBgUME25UVzGYE7sani2eYrgGiyh4M",
            authDomain: "test-6148c.firebaseapp.com",
            databaseURL: "https://test-6148c.firebaseio.com",
            projectId: "test-6148c",
            storageBucket: "test-6148c.appspot.com",
            messagingSenderId: "469373891917"
          };
      
      firebase.initializeApp(firebaseConfig);
    });

     this.storage.get('user').then(user=>{
        if(user != null ){
        console.log('test');
          this.has_login = true;
        }
     });
  }
  toFeedBack(){

    this.storage.get('user').then(user=>{
      if(user == null){
        this.errorMessage = 'you must login first';
      }
      else{
        this.navCtrl.push(FeedbackPage, {
          test : 'test'
        });
      }
    });
  }
}
