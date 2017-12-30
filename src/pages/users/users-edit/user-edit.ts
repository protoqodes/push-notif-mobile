import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import  Config  from '../../../shared/config';
import { Storage } from '@ionic/storage';
import { ApiService } from '../../../shared/api.service';
@Component({
  selector: 'user-edit',
  templateUrl: 'user-edit.html'
})
export class UserEditPage {
  _id: string;
  first_name: string;
  last_name : string;
  mobile : string;
  email : string;
  username : string;
  password : string;
  is_active : number;

  constructor(
  	public navCtrl: NavController, 
    public navParamsCtrl: NavParams,
  	private storage : Storage,
    private api : ApiService,
    // private fcm: FCM
  	) {
    console.log(navParamsCtrl)
    this._id = navParamsCtrl.get('_id');
    this.first_name = navParamsCtrl.get('first_name');
    this.last_name = navParamsCtrl.get('last_name');
    this.mobile = navParamsCtrl.get('mobile');
    this.email = navParamsCtrl.get('email');
    this.username = navParamsCtrl.get('username');
    this.password = navParamsCtrl.get('password');

  }


  ionViewWillEnter(){
 
  }

  ionViewDidEnter() {    
  

  }

  updateUser(){
     
  //   this.is_active = 0;
    this.api.Users.edit(this._id,this.first_name,this.last_name,this.mobile,this.email,this.username,this.password)
    .then(post =>{
        console.log(post);
        console.log('update');
    });

    this.navCtrl.pop();

  }
}
