import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import  Config  from '../../shared/config';
import { Storage } from '@ionic/storage';

import { ApiService } from '../../shared/api.service';
import {SocketService, UtilService} from "../../providers";
import {PostViewPage} from '../post/view-post/view-post';
import {FeedbackPage} from '../feedback/feedback';

// import { FCM } from '@ionic-native/fcm';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts : string[];
  comments : string[];
  page: string;
  pageSize: string;
  title: string;
  description: string;
  // date_filter : string = new Date().toISOString();
   date_filter : string;
  user_comment : Array<Object>;
  public users: Array<Object>;
  hasData : boolean = false;
  constructor(
  	public navCtrl: NavController,
  	private storage : Storage,
    public socketService: SocketService,
    // private fcm: FCM
    private api : ApiService
  	) {
  }

  ionViewWillEnter(){
  	this.storage.get('user')
  	.then(user => {
  		this.users = <Array<Object>> user;
  	})
    this.page = "1";
    this.pageSize = "10";
    this.title = "";
    this.description = "";
    // this.date_filter = new Date(this.date_filter);

    this.api.Posts.list(this.page,this.pageSize,this.title,this.description,this.date_filter).then(posts =>{
      console.log(posts)
      this.posts = posts.results
      this.hasData = true
    })


     // SocketService.connect();
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

  filterPost(){

    this.date_filter = new Date(this.date_filter).toString();
    // console.log(this);
    console.log(this.date_filter);
    this.api.Posts.list(this.page,this.pageSize,this.title,this.description,this.date_filter).then(posts =>{
      console.log(posts)
      this.posts = posts.results
      this.hasData = true
    })

  }

  selectedPost(post){
    this.navCtrl.push(PostViewPage, {
        _id: post._id
      });
  }
   doRefresh(refresher) {
    // console.log('Begin async operation', refresher);

    // setTimeout(() => {
    //   console.log('Async operation has ended');
    //   refresher.complete();
    // }, 2000);
// console.log(socketService.connect());
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
  toFeedBack(){
    this.navCtrl.push(FeedbackPage, {
      test : 'test'
    });
  }
  logoutBtn(){
    this.storage.clear();
    console.log(this.storage);
     this.navCtrl.pop();
  }
}
