import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import  Config  from '../../../shared/config';
import { Storage } from '@ionic/storage';
import { ApiService } from '../../../shared/api.service';
// import { MobileValidator } from '../../../shared/validator/mobile';
import { UtilService } from '../../../providers/utils.service';
// import { HomePage } from '../../../pages/home/home';
import { VerifyTokenPage } from '../../../pages/users/verify-token/verify-token';
import { FormBuilder, FormGroup, Validators, AbstractControl,FormControl } from '@angular/forms';

@Component({
  selector: 'user-register',
  templateUrl: 'user-register.html'
})
export class UserRegisterPage {
  // first_name: string;
  // last_name : string;
  // mobile : string;
  // email : string;
  // username : string;
  // password : string;
  is_active : number;
  first_name: AbstractControl;
  last_name: AbstractControl;
  mobile: AbstractControl;
  email: AbstractControl;
  username: AbstractControl;
  password: AbstractControl;
  submitAttempt: boolean = false;
  existUser: boolean = false;
  userForm: FormGroup;
  selected_number : string;
  constructor(
  	public navCtrl: NavController,
  	private storage : Storage,
    public toastCtrl: ToastController,
    private api : ApiService,
    public formBuilder: FormBuilder
    // private fcm: FCM
  	) {
      this.userForm = formBuilder.group({
        first_name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        last_name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        mobile: ['+63', Validators.compose([Validators.required]) ,this.checkMobile],
        email: ['', Validators.compose([Validators.required])],
        username: ['', Validators.compose([Validators.required])],
        password:['', Validators.compose([Validators.required])]
    });

      this.first_name = this.userForm.controls['first_name'];
      this.last_name = this.userForm.controls['last_name'];
      this.email = this.userForm.controls['email'];
      this.username = this.userForm.controls['username'];
      this.mobile = this.userForm.controls['mobile'];
      this.password = this.userForm.controls['password'];

  }


  ionViewWillEnter(){

  }

  checkMobile(c : FormControl){
       console.log(c.value.length);
      
      
         return new Promise(resolve => {
       
            //Fake a slow response from server
       
            setTimeout(() => {
                if(parseInt(c.value.length) !== 13 || parseInt(c.value.charAt(3)) !== 9){
                  resolve({ "not valid number ": true })  

                }

                resolve(null);
            }, 2000);
       });
    
       

  }

  checkUsername(c : FormControl){
    return new Promise(resolve => {
        console.log(c);
      //Fake a slow response from server
 
      setTimeout(() => {
          if(existUser){
            resolve({ "Exist User ": true })  

          }
          // if(parseInt(c.value.length) !== 13 || parseInt(c.value.charAt(3)) !== 9){
        
          // }

          resolve(null);
      }, 2000);
 
    });

  }

  addUser(){
     this.is_active = 0;
    // console.log(MobileValidator.checkMobile);
    // var field = {
    //   mobile : this.mobile,
    //   first_name : this.first_name
    // }

    // if(!this.validateField(field)){
    //     return
    // }
      // console.log(this.userForm.valid);
      if(!this.userForm.valid){
               let toast = this.toastCtrl.create({
                  message: "Need to fill up all ",
                  duration: 2000
              });
              toast.present();
 
         return false;

      }
      if(this.userForm.valid){
              var mobile = this.mobile.toString();
           
                this.api.Users.add(this.first_name.value,this.last_name.value,this.mobile.value,this.email.value,this.username.value,this.password.value,this.is_active)
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
                  }).catch(error => {
             
          });


      }
    
      
  }

  goBack(){
    this.navCtrl.pop();
  }


  // validateField(field){

  //   // this.data_validate = {
  //   //   phone : true,
  //   //   first_name : true,
  //   //   last_name : true,
  //   //   email : true,
  //   //   username : true,
  //   //   password : true
  //   // }

     

  //   if(parseInt(field.mobile.charAt(3)) !== 9 || field.mobile.length !== 13 ){
  //      let toast = this.toastCtrl.create({
  //         message: "Is not valid in PHIL Phone Number  ",
  //         duration: 2000
  //     });
  //     toast.present();
  //     this.data_validate.phone = false;
  //     return false;
  //   }

  //   // if(!field.first_name || /^[a-zA-Z0-9- ]*$/.test(field.first_name) == false){
  //   // //     let toast = this.toastCtrl.create({
  //   // //       message: "Invalid First Name",
  //   // //       duration: 2000
  //   // //   });
  //   // //   toast.present();
  //   //   this.data_validate.first_name = false;
  //   // }

  

  //   return true;

  // }
}
