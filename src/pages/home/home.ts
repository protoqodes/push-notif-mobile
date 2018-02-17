import { Component } from '@angular/core';
import { NavController, Nav,MenuController } from 'ionic-angular';
import  Config  from '../../shared/config';
import { Storage } from '@ionic/storage';

import { ApiService } from '../../shared/api.service';

import { SidebarNav } from '../../shared/sidebar/sidebar';
import {SocketService, UtilService} from "../../providers";
import {PostViewPage} from '../post/view-post/view-post';
import {FeedbackPage} from '../feedback/feedback';
import { LoginPage } from '../login/login';

// import { FCM } from '@ionic-native/fcm';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  directives: [SidebarNav],
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
  is_notify: boolean = false;
  constructor(
  	public navCtrl: NavController,
  	private storage : Storage,
    public socketService: SocketService,
    // private fcm: FCM
    private api : ApiService,
    public menuCtrl: MenuController
  	) {
  }

  ionViewWillEnter(){
  	this.storage.get('user')
  	.then(user => {
      if(user.user.is_verify != 1){
        console.log('test');
      }
  		this.users =  user;
  	});
    //if(this.users){
    
    //}
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

     setTimeout(() => {
      console.log('Async operation has ended');
       refresher.complete();
     }, 2000);
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
     this.navCtrl.setRoot(LoginPage);
  }
  notify(value){
    this.api.Users.notify(value,this.users.user._id).then(user =>{
        console.log(user);
        
    })
  }
  openMenu() {
   this.menuCtrl.open('#sidebar');
 }
}
