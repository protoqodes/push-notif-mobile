import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import  Config  from '../../../shared/config';
import { Storage } from '@ionic/storage';
import { ApiService } from '../../../shared/api.service';
import { UserAddPage } from '../users-add/user-add'
import { UserEditPage } from '../users-edit/user-edit'
@Component({
  selector: 'user-list',
  templateUrl: 'user-list.html'
})
export class UserListPage {
  public users: Array<Object>;

  constructor(
  	public navCtrl: NavController,
  	private storage : Storage,
    private api : ApiService,
    // private fcm: fcm
  	) {}


  ionViewWillEnter(){
 
  }

  ionViewDidEnter() {    
    this.api.Users.list().then((data) => {
      this.users = <Array<Object>> data;

      console.log(this.users)
    }, (error) => {});

    // console.log()

  }

  editUser(user_id) {
    this.api.Users.view(user_id).then((user) =>{
      console.log(user);
      this.navCtrl.push(UserEditPage, {
        
        _id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        mobile: user.mobile,
        email: user.email,
        username : user.username,
        password : user.password,
        img : user.img
      });
    });
  }

  addUser(){
      this.navCtrl.push(UserAddPage); 
  //   this.is_active = 0;
  //   this.api.Users.add(this.first_name,this.last_name,this.phone_number,this.email_add,this.username,this.password,this.is_active)
  //   .then(post =>{
  //       console.log(post);
  //       console.log('added');
  //   });

  }
}
