import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import  Config  from '../../../shared/config';
import { Storage } from '@ionic/storage';
import { ApiService } from '../../../shared/api.service';
import { UtilService } from '../../../providers/utils.service';
import { HomePage } from '../../../pages/home/home';


@Component({
  selector: 'forgot-pass',
  templateUrl: 'forgot-pass.html'
})
export class ForgotPassPage {
email : string;
message :string;
  constructor(
  	public navCtrl: NavController,
  	private storage : Storage,
    public toastCtrl: ToastController,
    private api : ApiService,
    // private fcm: FCM
  	) {}


  ionViewWillEnter(){

  }
  resetPass(){
  this.api.Users.password_reset(this.email).then(user =>{
    this.message = 'An email has been sent for your new password';
  }).catch(err =>{
    this.message =err._body;
     let toast = this.toastCtrl.create({
          message: err._body,
          duration: 2000
      });
      toast.present();
  })
  }

  goBack(){
    this.navCtrl.pop();
  }
}
