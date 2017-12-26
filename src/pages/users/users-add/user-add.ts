import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import  Config  from '../../../shared/config';
import { Storage } from '@ionic/storage';
import { ApiService } from '../../../shared/api.service';

@Component({
  selector: 'user-add',
  templateUrl: 'user-add.html'
})
export class UserAddPage {
  first_name: string;
  last_name : string;
  mobile : string;
  email : string;
  username : string;
  password : string;
  is_active : number;
  constructor(
  	public navCtrl: NavController,
  	private storage : Storage,
    private api : ApiService,
    // private fcm: FCM
  	) {}


  ionViewWillEnter(){

  }

  addUser(){
    this.is_active = 0;
    this.api.Users.add(this.first_name,this.last_name,this.mobile,this.email,this.username,this.password,this.is_active)
    .then(post =>{
        console.log(post);
        console.log('added');
    });

  }
}
