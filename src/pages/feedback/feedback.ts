import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import  Config  from '../../shared/config';
import { Storage } from '@ionic/storage';

import { ApiService } from '../../shared/api.service';
import {SocketService, UtilService} from "../../providers";
import { FeedbackThankYouPage } from "../feedback_thankyou/thankyou"
// import { FCM } from '@ionic-native/fcm';
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {
  feedback = {};
  constructor(
  	public navCtrl: NavController,
  	private storage : Storage,
    public socketService: SocketService,
    // private fcm: FCM
    private api : ApiService
  	) {
  }

  feedbackForm(){
    this.storage.get('user').then(data =>{
      
      this.api.Feedback.add(
      this.feedback.title,
      this.feedback.description,
      data.user._id,
      data.user.is_verify,
      data.user.email
      ).then(feedback =>{

          console.log(feedback);
          this.navCtrl.push(FeedbackThankYouPage,{
           hello : 'test'
          })
      })
    })
  }
  logoutBtn(){
    this.storage.clear();
    console.log(this.storage);
     this.navCtrl.pop();
  }
}
