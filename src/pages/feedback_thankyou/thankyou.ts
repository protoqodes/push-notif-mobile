import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import  Config  from '../../shared/config';
import { Storage } from '@ionic/storage';

import { ApiService } from '../../shared/api.service';
import {SocketService, UtilService} from "../../providers";

import { HomePage } from "../home/home";
// import { FCM } from '@ionic-native/fcm';
@Component({
  selector: 'page-thank-you',
  templateUrl: 'thankyou.html'
})
export class FeedbackThankYouPage {
  is_verify = '';
  constructor(
  	public navCtrl: NavController,
  	private storage : Storage,
    public socketService: SocketService,
    // private fcm: FCM
    private api : ApiService
  	) {
    //this.is_verify = navParamsCtrl.get('is_verify');
    this.storage.get('user').then(data =>{
        this.is_verify = data.user.is_verify;
        console.log(this.is_verify);
        console.log(data.user.is_verify)
    })
  }
  backToPost(){
    this.navCtrl.push(HomePage,{
           hello : 'test'
          })
  }
  
  logoutBtn(){

     this.navCtrl.pop();
  }
}
