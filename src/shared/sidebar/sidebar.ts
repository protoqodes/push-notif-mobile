import { Component } from '@angular/core';
import { NavController, Nav,MenuController } from 'ionic-angular';
import  Config  from '../../shared/config';
import { Storage } from '@ionic/storage';

import { ApiService } from '../api.service';
import {FeedbackPage} from '../../pages/feedback/feedback';

import { NavController, Nav,MenuController } from 'ionic-angular';

// import { FCM } from '@ionic-native/fcm';
@Component({
  selector: 'navsidebar',
  templateUrl: 'sidebar.html'
})
export class SidebarNav {
  hasData : boolean = false;
  is_notify: boolean = false;
  public users: Array<Object>;
  constructor(
  	public navCtrl: NavController,
  	private storage : Storage,
    // private fcm: FCM
    private api : ApiService,
    public menuCtrl: MenuController
  	) {
    this.storage.get('user').then(user =>{
    console.log(user.user.is_notify)
      this.is_notify = user.user.is_notify;
    })
  }

  notify(value){
     this.storage.get('user')
    .then(user => {
      this.api.Users.notify(value,user.user._id).then(user =>{
        this.storage.remove('user');
        this.storage.set('user',user);
        
      })
    })
    
  }
  toFeedBack(){
    this.navCtrl.push(FeedbackPage, {
      test : 'test'
    });
  }
  openMenu() {
   this.menuCtrl.open('#sidebar');
 }
}
