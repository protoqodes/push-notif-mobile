import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import  Config  from '../../../shared/config';
import { Storage } from '@ionic/storage';
import { ApiService } from '../../../shared/api.service';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { ActionSheetController } from 'ionic-angular';
import { Base64 } from '@ionic-native/base64';
import  client  from 'filestack-js';
import { storage, initializeApp } from 'firebase';
const filestack = client.init(
  'AFHvRuXHQeevnhfnlqdyAz',
  {
    policy : 'eyJjYWxsIjpbInBpY2siLCJyZWFkIiwic3RhdCIsIndyaXRlIiwid3JpdGVVcmwiLCJzdG9yZSIsImNvbnZlcnQiXSwiZXhwaXJ5IjoxNTMyOTY2NDAwfQ==',
    signature : 'd0643e1e7c2320fecbbe6500c2f0f7ca7146c7abf1a110363b45da46d4cb81e4'
  });
@Component({
  selector: 'user-edit',
  templateUrl: 'user-edit.html'
})
export class UserEditPage {
  _id: string;
  first_name: string;
  last_name : string;
  mobile : string;
  email : string;
  username : string;
  password : string;
  is_active : number;
  img : string;
  path : string;
  img_name : string;
  constructor(
    public navCtrl: NavController, 
    public navParamsCtrl: NavParams,
    private storage : Storage,
    private api : ApiService,
    private transfer: FileTransfer,
    public camera: Camera,
    private file: File, 
    private filePath: FilePath,
     public actionSheetCtrl: ActionSheetController,
     private base64: Base64
    // private fcm: FCM
    ) {
    initializeApp(Config.firebase);
  this.storage.get('user')
    .then(user => {
      console.log(user);
      if(user){
        console.log(user.user._id)
          this._id = user.user._id;
          this.first_name = user.user.first_name;
          this.last_name = user.user.last_name;
          this.mobile = user.user.mobile;
          this.email = user.user.email;
          this.username = user.user.username;
          this.password = user.user.password;
          this.img = user.user.img;
      }
    })
    
      

  }


  ionViewWillEnter(){

 
  }

  ionViewDidEnter() {    
  

  }

  presentActionSheet() {
      
     let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  public takePicture(sourceType){
     const  options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: sourceType,
       correctOrientation: false,
      saveToPhotoAlbum: true,
      targetWidth: 1000,
      targetHeight: 1000,
      correctOrientation : true,
      
    }
    
  const result = this.camera.getPicture(options);
  alert(result);
  const image = `data:image/jpeg;base64,${result}`;
  const pictures = storage.ref('pictures');
  pictures.putString(image, 'data_url');

  }

  updateUser(){
    
  //   this.is_active = 0;
    this.api.Users.edit(
    this._id,
    this.first_name,
    this.last_name,
    this.mobile,
    this.email,
    this.username,
    this.password,
    this.path,
    this.img_name)
    .then(post =>{
        console.log(post);
        console.log('update');
    });

    this.navCtrl.pop();

  }
}