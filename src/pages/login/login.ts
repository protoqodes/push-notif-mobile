import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiService } from '../../shared/api.service';
import  Config  from '../../shared/config';
import { Storage } from '@ionic/storage';
import { Http }  from '@angular/http';
import { UserRegisterPage } from '../../pages/users/register/user-register';
import { VerifyTokenPage } from '../../pages/users/verify-token/verify-token';
import { ForgotPassPage } from '../../pages/users/forgot-pass/forgot-pass';

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
      console.log(user);
      this.storeUser(user);
    })
    .catch(error => {
      console.log(error)
    })

  }
  storeUser(user){

    console.log(user);

    if(user.user.is_active === 0){
        this.goVerify(user)
    }else{
       this.storage.set('user', user);
        this.navCtrl.push(HomePage, {}, {
          animate: true,
          direction: 'forward'
        });

    }


  }

  goRegister(){
    this.navCtrl.push(UserRegisterPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  goReset(){
    this.navCtrl.push(ForgotPassPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  goVerify(user){
    // console.log(user);
    this.navCtrl.push(VerifyTokenPage, {user_id:user.user._id, user: user}, {
      animate: true,
      direction: 'forward'
    });

  }


}
