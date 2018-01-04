import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import  Config  from '../../../shared/config';
import { Storage } from '@ionic/storage';
import { ApiService } from '../../../shared/api.service';
import { UtilService } from '../../../providers/utils.service';
import { HomePage } from '../../../pages/home/home';


@Component({
  selector: 'user-register',
  templateUrl: 'user-register.html'
})
export class UserRegisterPage {
  first_name: string;
  last_name : string;
  mobile : string;
  email : string;
  username : string;
  password : string;
  is_active : number;
  selected_number : string;
  constructor(
  	public navCtrl: NavController,
  	private storage : Storage,
    public toastCtrl: ToastController,
    private api : ApiService,
    // private fcm: FCM
  	) {}


  ionViewWillEnter(){

  }

  addUser(){
    this.is_active = 0;

    var field = {
      mobile : this.mobile
    }

    if(!this.validateField(field)){
        return 
    }
    
     var mobile = this.mobile.toString();

      this.api.Users.add(this.first_name,this.last_name,mobile,this.email,this.username,this.password,this.is_active)
      .then(post =>{
          console.log(post);

          if(post){
            var generateToken = UtilService.generateRandomToken();
            this.api.MobileToken.add(post._id,generateToken,post.username,post.password).then(mobile_token => {
                console.log(mobile_token)
                if(mobile_token){
                   this.storage.set('user', post);
                   console.log(this.storage)
                    this.navCtrl.push(HomePage, {}, {
                    animate: true,
                    direction: 'forward'
                  });
                }

            });
          }
          console.log('added');
      });
    

  }


  validateField(field){
    
    if(parseInt(field.mobile.charAt(3)) !== 9 || field.mobile.length !== 13 ){
       let toast = this.toastCtrl.create({
          message: "Is not valid in PHIL Phone Number  ",
          duration: 2000
      });
      toast.present();

      return false
    }

   

    return true;

  }
}
