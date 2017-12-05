import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import  Config  from '../../shared/config';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
  	public navCtrl: NavController,
  	private storage : Storage
  	) {
  }
  ionViewWillEnter(){
  	this.storage.get('user')
  	.then(user => {
  		console.log(user)
  	})
  }
}
