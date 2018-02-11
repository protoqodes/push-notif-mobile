import { Component } from '@angular/core';
import { NavController,ToastController, NavParams } from 'ionic-angular';
import  Config  from '../../../shared/config';
import { Storage } from '@ionic/storage';
import { ApiService } from '../../../shared/api.service';
import {SocketService, UtilService} from "../../../providers";
// import { UtilService } from '../../../providers/utils.service';
import { LoginPage } from '../../../pages/login/login';
import { HomePage } from '../../../pages/home/home';


@Component({
  selector: 'verify-token',
  templateUrl: 'verify-token.html'
})
export class VerifyTokenPage {
   _id: string;
  user: Array<Object>;
  verify_token: string;
  constructor(
  	public navCtrl: NavController,
  	private storage : Storage,
    public navParamsCtrl: NavParams,
    public toastCtrl: ToastController,
    private api : ApiService,
    // private fcm: FCM
  	){
     this._id = navParamsCtrl.get('user_id');
     this.user = navParamsCtrl.get('user')

    }


  ionViewWillEnter(){

  }

  verifyUser(){

   
    // if(!this.validateField(field)){
    //     return 
    // }

   
     // this.mobile = this.selected_number + "" + this.mobile
    console.log(this._id);
     console.log(this.verify_token);
      this.api.MobileToken.activate_user(this._id,this.verify_token)
      .then(verify_token =>{
        console.log(verify_token)
        if(verify_token){
           let toast = this.toastCtrl.create({
                message: "Successfully Verified",
                duration: 2000
            });
            toast.present();
              console.log(verify_token);
             this.storage.set('user', this.user);
             this.storage.set('is_notify',this.user.user.is_notify);
             
             this.navCtrl.push(HomePage, {}, {
              animate: true,
              direction: 'forward'
            });

        }else{
           let toast = this.toastCtrl.create({
                message: "Token is not Valid",
                duration: 2000
            });
            toast.present();

        }
                
      });
    

  }
  backLogin(){
    this.navCtrl.push(LoginPage, {
      animate: true,
      direction: 'backward'
    });
    
  }


}
