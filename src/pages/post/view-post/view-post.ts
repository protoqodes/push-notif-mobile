import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import  Config  from '../../../shared/config';
import { Storage } from '@ionic/storage';
import { ApiService } from '../../../shared/api.service';
@Component({
  selector: 'view-post',
  templateUrl: 'view-post.html'
})
export class PostViewPage {
  _id: string;
  title: string;
  description : string;
  img : string;
  created_at : string;
  comment_docs: Array<Object>;

  constructor(
  	public navCtrl: NavController, 
    public navParamsCtrl: NavParams,
  	private storage : Storage,
    private api : ApiService,
    // private fcm: FCM
  	) {
    console.log(navParamsCtrl)
    this._id = navParamsCtrl.get('_id');
   
   
  }


  ionViewWillEnter(){
     this.api.Posts.view(this._id).then(post =>{
            console.log(post);
            this._id = post.results[0]._id;
            this.title = post.results[0].title;
            this.description  = post.results[0].description;
            this.img = post.results[0].img;
            this.comment_docs = post.results[0].comment_docs;
      })

     console.log(this);
 
  }

  ionViewDidEnter() {    
    
    

  }

  updateUser(){
     
  //   this.is_active = 0;
    // this.api.Users.edit(this._id,this.first_name,this.last_name,this.mobile,this.email,this.username,this.password)
    // .then(post =>{
    //     console.log(post);
    //     console.log('update');
    // });

    // this.navCtrl.pop();

  }
}
