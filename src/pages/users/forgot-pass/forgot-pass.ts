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
  constructor(
  	public navCtrl: NavController,
  	private storage : Storage,
    public toastCtrl: ToastController,
    private api : ApiService,
    // private fcm: FCM
  	) {}


  ionViewWillEnter(){

  }
}
