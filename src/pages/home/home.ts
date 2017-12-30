import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import  Config  from '../../shared/config';
import { Storage } from '@ionic/storage';

import { ApiService } from '../../shared/api.service';
import { FCM } from '@ionic-native/fcm';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts : string[];
  comments : string[];
  user_comment : Array<Object>;
  public users: Array<Object>;
  hasData : boolean = false;
  constructor(
  	public navCtrl: NavController,
  	private storage : Storage,
    // private fcm: FCM
    private api : ApiService
  	) {
  }
  ionViewWillEnter(){
  	this.storage.get('user')
  	.then(user => {
  		this.users = <Array<Object>> user;
  	})
    this.api.Posts.list().then(posts =>{
      console.log(posts)
      this.posts = posts.results
      this.hasData = true
    })



    // if(this.posts){
    //     this.posts.forEach(value =>{
    //         console.log(value);

    //     })


    // }
    // this.fcm.subscribeToTopic('news');

    // this.fcm.getToken().then(token=>{

    //   console.log(token)
    // // backend.registerToken(token);
    // })

    // this.fcm.onNotification().subscribe(data=>{
    // if(data.wasTapped){
    //   console.log("Received in background");
    // } else {
    //   console.log("Received in foreground");
    // };
    // })

    // this.fcm.onTokenRefresh().subscribe(token=>{
    //   console.log(tiken)
    // // backend.registerToken(token);
    // })

    // this.fcm.unsubscribeFromTopic('marketing');
  } 

   doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  postComment(post){
    // console.log(this.user_comment)
    console.log(post);

    this.api.Comments.add(this.users['_id'],post._id,post.field)
    .then(comments =>{
        console.log(comments);
        console.log('added');
    });

  }
}
