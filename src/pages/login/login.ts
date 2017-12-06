import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiService } from '../../shared/api.service';
import  Config  from '../../shared/config';
import { Storage } from '@ionic/storage';
import { Http }  from '@angular/http';
import * as $ from "jquery";
// Pages
import { HomePage } from '../home/home';
@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {
  userData: any;

  posts: {username: string, password: string, in_mobile: boolean} = {
    username : '',
    password : '',
    in_mobile : true
  }
  constructor(
  	public navCtrl: NavController,

    private storage: Storage,
    private api:ApiService,
    private http:Http) {

  }
  ionViewWillEnter(){
    this.storage.get('user')
    .then(user => {
      if(user){
        this.navCtrl.push(HomePage, {}, {
          animate: true,
          direction: 'forward'
        });
      }
    })
  }
  logMeIn() {
    var getUser = this.posts.username,
        getPass = this.posts.password,
        baseUrl = Config.baseUrl;
    this.api.Users.login(getUser,getPass)
    .then(user =>{
      this.storeUser(user);
    })
    .catch(error => {
      console.log(error)
    })

  }
  storeUser(user){
    this.storage.set('user', user);
    this.navCtrl.push(HomePage, {}, {
      animate: true,
      direction: 'forward'
    });
  }
}
