import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
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
    public toastCtrl: ToastController,
    // private fcm: FCM
    private api : ApiService
  	) {
  }

  feedbackForm(){


    if(Object.keys(this.feedback).length <2){
       let toast = this.toastCtrl.create({
          message: "Required All",
          duration: 2000
      });
      toast.present();

      return
    }
     if(Object.keys(this.feedback).length == 2){
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
  }
  logoutBtn(){
     this.navCtrl.pop();
  }
}
