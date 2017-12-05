import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import  Config  from '../../shared/config';
import { Storage } from '@ionic/storage';
import { FCM } from '@ionic-native/fcm';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
  	public navCtrl: NavController,
  	private storage : Storage,
    private fcm: FCM
  	) {
  }
  ionViewWillEnter(){
  	this.storage.get('user')
  	.then(user => {
  		console.log(user)
  	})
    this.fcm.subscribeToTopic('news');

    this.fcm.getToken().then(token=>{

      console.log(token)
    // backend.registerToken(token);
    })

    this.fcm.onNotification().subscribe(data=>{
    if(data.wasTapped){
      console.log("Received in background");
    } else {
      console.log("Received in foreground");
    };
    })

    // this.fcm.onTokenRefresh().subscribe(token=>{
    //   console.log(tiken)
    // // backend.registerToken(token);
    // })

    // this.fcm.unsubscribeFromTopic('marketing');
  }
}
