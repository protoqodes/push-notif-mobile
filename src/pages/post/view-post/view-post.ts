import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import  Config  from '../../../shared/config';
import { Storage } from '@ionic/storage';
import { ApiService } from '../../../shared/api.service';
import { SidebarNav } from '../../../shared/sidebar/sidebar';
@Component({
  selector: 'view-post',
  templateUrl: 'view-post.html'
})
export class PostViewPage {
  _id: string;
  title: string;
  description : string;
  save_post = {};
  img : string;
  fullname : string;
  created_at : string;
  comment_docs: Array<Object>;
  user_id : string;
  image_user : string;
  constructor(
  	public navCtrl: NavController,
    public navParamsCtrl: NavParams,
    public toastCtrl: ToastController,
  	private storage : Storage,
    private api : ApiService,
    // private fcm: FCM
  	) {
  }


  ionViewWillEnter(){

     this.api.Posts.view(this.navParamsCtrl.data._id).then(post =>{
            
            this._id = post.results[0]._id;
            this.title = post.results[0].title;
            this.description  = post.results[0].description;
            this.img = post.results[0].img;
            this.comment_docs = post.results[0].comment_docs;
            console.log(this.comment_docs)
      })
    this.storage.get('user').then(user=>{
      this.user_id = user.user._id;
      this.fullname = user.user.first_name + ' ' + user.user.last_name;
      this.image_user = user.user.img;
    })
     console.log(this);
  }
  postComment(){

    console.log(this);

    if(this.save_post.description == '' || Object.keys(this.save_post).length < 1 || this.save_post.description === ' '){
      let toast = this.toastCtrl.create({
        message: "Please add a comment",
        duration: 2000
      });

      toast.present();
      return;
    }

    this.api.Comments.add(this.user_id,this._id,this.save_post.description,this.fullname,this.image_user)
    .then(comments =>{
        this.api.Posts.view(this._id).then(post =>{
            this.comment_docs = post.results[0].comment_docs;
      })
        
    });

    this.save_post.description = '';

  }


  ionViewDidEnter() {
  }

  goBack(){
    this.navCtrl.pop();
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
