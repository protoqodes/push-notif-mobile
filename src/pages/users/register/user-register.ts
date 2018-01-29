import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import  Config  from '../../../shared/config';
import { Storage } from '@ionic/storage';
import { ApiService } from '../../../shared/api.service';
import { UtilService } from '../../../providers/utils.service';
// import { HomePage } from '../../../pages/home/home';
import { VerifyTokenPage } from '../../../pages/users/verify-token/verify-token';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

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
  data_validate : {
     phone : boolean,
     first_name : boolean
  };
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
      mobile : this.mobile,
      first_name : this.first_name
    }

    if(!this.validateField(field)){
        return
    }

     console.log(this.data_validate);

     var mobile = this.mobile.toString();

      this.api.Users.add(this.first_name,this.last_name,mobile,this.email,this.username,this.password,this.is_active)
      .then(post =>{
          console.log(post);

          if(post){

              var generateToken = UtilService.generateRandomToken();
              this.api.MobileToken.add(generateToken,this.first_name,this.last_name,mobile,this.email,this.username,this.password,this.is_active).then(mobile_token => {
                  if(mobile_token.user){
                     this.navCtrl.push(VerifyTokenPage, {user_id:mobile_token.user._id, user: mobile_token.user}, {
                      animate: true,
                      direction: 'forward'
                    });
                  }

              });
          }
    console.log('added');
      });


  }

  goBack(){
    this.navCtrl.pop();
  }


  validateField(field){

    // this.data_validate = {
    //   phone : true,
    //   first_name : true,
    //   last_name : true,
    //   email : true,
    //   username : true,
    //   password : true
    // }

     

    if(parseInt(field.mobile.charAt(3)) !== 9 || field.mobile.length !== 13 ){
       let toast = this.toastCtrl.create({
          message: "Is not valid in PHIL Phone Number  ",
          duration: 2000
      });
      toast.present();
      this.data_validate.phone = false;
      return false;
    }

    // if(!field.first_name || /^[a-zA-Z0-9- ]*$/.test(field.first_name) == false){
    // //     let toast = this.toastCtrl.create({
    // //       message: "Invalid First Name",
    // //       duration: 2000
    // //   });
    // //   toast.present();
    //   this.data_validate.first_name = false;
    // }

  

    return true;

  }
}
