webpackJsonp([0],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyTokenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VerifyTokenPage = (function () {
    function VerifyTokenPage(navCtrl, storage, navParamsCtrl, toastCtrl, api) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParamsCtrl = navParamsCtrl;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this._id = navParamsCtrl.get('user_id');
        this.user = navParamsCtrl.get('user');
    }
    VerifyTokenPage.prototype.ionViewWillEnter = function () {
    };
    VerifyTokenPage.prototype.verifyUser = function () {
        // if(!this.validateField(field)){
        //     return 
        // }
        var _this = this;
        // this.mobile = this.selected_number + "" + this.mobile
        console.log(this._id);
        console.log(this.verify_token);
        this.api.MobileToken.activate_user(this._id, this.verify_token)
            .then(function (verify_token) {
            console.log(verify_token);
            if (verify_token) {
                var toast = _this.toastCtrl.create({
                    message: "Successfully Verified",
                    duration: 2000
                });
                toast.present();
                _this.storage.set('user', _this.user);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], {}, {
                    animate: true,
                    direction: 'forward'
                });
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: "Token is not Valid",
                    duration: 2000
                });
                toast.present();
            }
        });
    };
    VerifyTokenPage.prototype.backLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], {
            animate: true,
            direction: 'backward'
        });
    };
    VerifyTokenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'verify-token',template:/*ion-inline-start:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\users\verify-token\verify-token.html"*/`<ion-header>\n\n  <ion-navbar color="main">\n\n    <ion-title text-center>\n\n     Verify\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <!-- <button ion-button (click)=\'addUser()\'>Add</button> -->\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-item>\n\n      <ion-label color="main" floating>Verify with This</ion-label>\n\n      <ion-input type="text" [(ngModel)]="verify_token" text-left></ion-input>\n\n    </ion-item>\n\n  </ion-row>\n\n  <button ion-button round full (click)=\'verifyUser()\'>Verify</button>\n\n  <button ion-button round full (click)=\'backLogin()\'>Back to Login</button>\n\n</ion-content>`/*ion-inline-end:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\users\verify-token\verify-token.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */]])
    ], VerifyTokenPage);
    return VerifyTokenPage;
}());

//# sourceMappingURL=verify-token.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64__ = __webpack_require__(380);
throw new Error("Cannot find module \"angularfire2/storage\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_filestack_js__ = __webpack_require__(738);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












// import firebase from 'firebase';
var filestack = __WEBPACK_IMPORTED_MODULE_10_filestack_js__["a" /* default */].init('AFHvRuXHQeevnhfnlqdyAz', {
    policy: 'eyJjYWxsIjpbInBpY2siLCJyZWFkIiwic3RhdCIsIndyaXRlIiwid3JpdGVVcmwiLCJzdG9yZSIsImNvbnZlcnQiXSwiZXhwaXJ5IjoxNTMyOTY2NDAwfQ==',
    signature: 'd0643e1e7c2320fecbbe6500c2f0f7ca7146c7abf1a110363b45da46d4cb81e4'
});
var UserEditPage = (function () {
    function UserEditPage(navCtrl, navParamsCtrl, storage, api, transfer, camera, file, filePath, actionSheetCtrl, afStorage, base64
        // private fcm: FCM
    ) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParamsCtrl = navParamsCtrl;
        this.storage = storage;
        this.api = api;
        this.transfer = transfer;
        this.camera = camera;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.afStorage = afStorage;
        this.base64 = base64;
        this.storage.get('user')
            .then(function (user) {
            console.log(user);
            if (user) {
                console.log(user.user._id);
                _this._id = user.user._id;
                _this.first_name = user.user.first_name;
                _this.last_name = user.user.last_name;
                _this.mobile = user.user.mobile;
                _this.email = user.user.email;
                _this.username = user.user.username;
                _this.password = user.user.password;
                _this.img = user.user.img;
            }
        });
    }
    UserEditPage.prototype.ionViewWillEnter = function () {
    };
    UserEditPage.prototype.ionViewDidEnter = function () {
    };
    UserEditPage.prototype.presentActionSheet = function () {
        var fileOptions = {
            intelligent: true
        };
        var storeOptions = {
            filename: 'test.jpg',
            access: 'public'
        };
        /*let actionSheet = this.actionSheetCtrl.create({
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
             handler: ( ) => {
               this.takePicture(this.camera.PictureSourceType.CAMERA);
             }
           },
           {
             text: 'Cancel',
             role: 'cancel'
           }
         ]
       });
       actionSheet.present();*/
    };
    UserEditPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            // encodingType: this.camera.EncodingType.JPEG,
            sourceType: sourceType,
            correctOrientation: false,
            saveToPhotoAlbum: true,
            targetWidth: 1000,
            targetHeight: 1000
        };
        this.camera.getPicture(options).then(function (imageData) {
            var name = imageData.substring(imageData.lastIndexOf('/') + 1, imageData.lastIndexOf('?'));
            var fileOptions = {
                intelligent: false
            };
            var storeOptions = {
                filename: name
            };
            _this.base64.encodeFile(imageData).then(function (base64File) {
                alert(base64);
                filestack.upload(base64)
                    .then(function (res) {
                    _this.path = res.url;
                    _this.api.Users.image(_this._id, 'asd', res).then(function (image) {
                        console.log(image);
                    });
                }).catch(function (err) {
                    _this.path = err;
                    _this.api.Users.image(_this._id, 'asd', err).then(function (image) {
                        console.log();
                    });
                });
            }, function (err) {
                console.log(err);
            });
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imageData).then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imageData.substring(imageData.lastIndexOf('/') + 1, imageData.lastIndexOf('?'));
                    _this.path = filePath;
                    _this.img_name = imageData;
                }).catch(function (err) {
                    console.log('test');
                });
            }
            else {
                var correctPath = imageData.substr(0, imageData.lastIndexOf('/') + 1);
                var currentName = imageData.substring(imageData.lastIndexOf('/') + 1);
                _this.path = filePath;
                _this.img_name = imageData;
                // alert('running here else');
            }
        }, function (err) {
            alert(err);
            // Handle error
        });
    };
    UserEditPage.prototype.capture = function () {
        var _this = this;
        //setup camera options
        var cameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    UserEditPage.prototype.upload = function () {
        // firebase.initializeApp(firebaseConfig);
        // console.log(firebase);
        // let storageRef = firebase.storage().ref();
        // Create a timestamp as filename
        var file = 'data:image/jpeg;base64,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';
        var filename = 'test.jpg';
        // const storageRef: AngularFireStorageReference = this.afStorage.ref(`/images/${filename}.jpg`);
        // Create a reference to 'images/todays-date.jpg'
        // const imageRef = storageRef.child(`users/${filename}.jpg`);
        var asd = this.afStorage.ref("users/" + filename + ".jpg").putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL);
        console.log(asd); // console.log(imageRef);
        // imageRef.putString(file, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
        //  // Do something here when the data is succesfully uploaded!
        //  console.log(snapshot);
        //  this.image = snapshot;
        // }).catch((err) =>{
        //   console.log(err);
        // })
    };
    UserEditPage.prototype.updateUser = function () {
        //   this.is_active = 0;
        this.api.Users.edit(this._id, this.first_name, this.last_name, this.mobile, this.email, this.username, this.password, this.path, this.img_name)
            .then(function (post) {
            console.log(post);
            console.log('update');
        });
        this.navCtrl.pop();
    };
    UserEditPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    UserEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-edit',template:/*ion-inline-start:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\users\users-edit\user-edit.html"*/`<ion-header>\n\n  <ion-navbar color="main">\n\n    <ion-title text-center>\n\n     \n\n      <button ion-button (click)=\'updateUser()\'>Save</button>\n\n    </ion-title>\n\n    <ion-buttons end>\n\n    <a (click)=\'goBack()\' class="back-btn"><img src="https://cdn.filestackcontent.com/EBEl5OK0TKmGOOjWI1Kw"/></a>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <!-- <img class="addPhoto" src="assets/images/medicine_logo.png"> -->\n\n    <ion-item text-center>\n\n    <div class="editPhoto">\n\n    \n\n    <!--<button ion-button icon-left (click)="presentActionSheet()">\n\n      <ion-icon name="camera"></ion-icon>Edit Profile  \n\n    </button>-->\n\n    <button ion-button (click)="capture()">Lets take a picture!</button>\n\n  </div><br>\n\n      <!--<img [src]="captureDataUrl" *ngIf="captureDataUrl"/>-->\n\n      <button ion-button (click)="upload()">Upload to Firebase!</button>\n\n      <p >{{image}}</p>\n\n    </ion-item>\n\n    \n\n    <ion-item>\n\n      <ion-label color="main" floating>First Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="first_name" text-left></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="main" floating>Last Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="last_name" text-left></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="main" floating>Phone</ion-label>\n\n      <ion-input type="text" [(ngModel)]="mobile" text-left></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n      <ion-label color="main" floating>Email</ion-label>\n\n      <ion-input type="email" [(ngModel)]="email" text-left></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n      <ion-label color="main" floating>Username</ion-label>\n\n      <ion-input type="text" [(ngModel)]="username" text-left></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n      <ion-label color="main" floating>Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="password" text-left></ion-input>\n\n    </ion-item>\n\n\n\n\n\n  </ion-row>\n\n</ion-content>`/*ion-inline-end:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\users\users-edit\user-edit.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_9_angularfire2_storage__["AngularFireStorage"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_angularfire2_storage__["AngularFireStorage"]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64__["a" /* Base64 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64__["a" /* Base64 */]) === "function" && _l || Object])
    ], UserEditPage);
    return UserEditPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=user-edit.js.map

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 221;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = (function () {
    function ApiService(http) {
        var _this = this;
        this.http = http;
        this.Users = {
            login: function (username, password) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/users/login", {
                    username: username,
                    password: password
                })
                    .map(function (response) {
                    return response.json();
                }).toPromise();
            },
            add: function (first_name, last_name, mobile, email, username, password, is_active) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/users/add", {
                    first_name: first_name,
                    last_name: last_name,
                    mobile: mobile,
                    email: email,
                    username: username,
                    password: password,
                    is_active: is_active,
                    permission: '0',
                    is_verify: '0'
                })
                    .map(function (response) {
                    return response.json();
                }).toPromise();
            },
            list: function () {
                return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/users/list")
                    .map(function (response) {
                    return response.json();
                }).toPromise();
            },
            password_reset: function (email) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/users/reset", {
                    email: email
                })
                    .map(function (response) {
                    return response.json();
                }).toPromise();
            },
            view: function (id) {
                return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/users/view/" + id)
                    .map(function (response) {
                    return response.json();
                }).toPromise();
            },
            edit: function (user_id, first_name, last_name, mobile, email, username, password, path, img_name) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/users/edit/" + user_id, {
                    first_name: first_name,
                    last_name: last_name,
                    mobile: mobile,
                    email: email,
                    username: username,
                    password: password,
                    path: path,
                    img_name: img_name
                })
                    .map(function (response) {
                    return response.json();
                }).toPromise();
            },
            activate_user: function (user_id) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/users/activated_user/" + user_id, {
                    user_id: user_id
                })
                    .map(function (response) {
                    return response.json();
                }).toPromise();
            },
            notify: function (is_notify, user_id) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/users/notify/" + user_id, {
                    is_notify: is_notify
                })
                    .map(function (response) {
                    return response.json();
                }).toPromise();
            },
            image: function (user_id, correctPath, currentName) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/users/image/" + user_id, {
                    correctPath: correctPath,
                    currentName: currentName
                })
                    .map(function (response) {
                    return response.json();
                }).toPromise();
            }
        };
        this.Posts = {
            list: function (page, pageSize, title, description, date_filter) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/posts/list", {
                    page: page,
                    pageSize: pageSize,
                    title: title,
                    description: description,
                    date_filter: date_filter
                })
                    .map(function (response) {
                    return response.json();
                }).toPromise();
            },
            view: function (post_id) {
                return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/posts/view/" + post_id)
                    .map(function (response) {
                    return response.json();
                }).toPromise();
            },
        };
        this.Comments = {
            list: function () {
                return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/comments/list")
                    .map(function (response) {
                    return response.json();
                }).toPromise();
            },
            add: function (user_id, post_id, description, fullname) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/comments/add", {
                    user_id: user_id,
                    post_id: post_id,
                    description: description,
                    fullname: fullname
                })
                    .map(function (response) {
                    return response.json();
                }).toPromise();
            },
        };
        this.MobileToken = {
            add: function (generate_token, first_name, last_name, mobile, email, username, password, is_active) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/verify_token/add_user", {
                    generate_token: generate_token,
                    first_name: first_name,
                    last_name: last_name,
                    mobile: mobile,
                    email: email,
                    username: username,
                    password: password,
                    is_active: is_active
                })
                    .map(function (response) {
                    return response.json();
                }).toPromise();
            },
            activate_user: function (user_id, generate_token) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/verify_token/activated_user/" + user_id, {
                    user_id: user_id,
                    generate_token: generate_token
                })
                    .map(function (response) {
                    return response.json();
                }).toPromise();
            }
        };
        this.Feedback = {
            add: function (title, description, user_id, is_verify, email) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/feedback/add", {
                    user_id: user_id,
                    title: title,
                    description: description,
                    is_verify: is_verify,
                    email: email
                })
                    .map(function (response) {
                    return response.json();
                }).toPromise();
            }
        };
    }
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ApiService);
    return ApiService;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_config__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_users_register_user_register__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_users_verify_token_verify_token__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_users_forgot_pass_forgot_pass__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// Pages

var LoginPage = (function () {
    function LoginPage(navCtrl, menu, toastCtrl, storage, api, http) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.api = api;
        this.http = http;
        this.posts = {
            username: '',
            password: '',
            in_mobile: true
        };
    }
    LoginPage.prototype.isEnabled = function () {
        console.log(this.menu.enable());
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.isEnabled();
        // this.storage.clear();
        this.storage.get('user')
            .then(function (user) {
            if (user) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */], {}, {
                    animate: true,
                    direction: 'forward'
                });
            }
        });
    };
    LoginPage.prototype.logMeIn = function () {
        var _this = this;
        var getUser = this.posts.username, getPass = this.posts.password, baseUrl = __WEBPACK_IMPORTED_MODULE_3__shared_config__["a" /* default */].baseUrl;
        this.api.Users.login(getUser, getPass)
            .then(function (user) {
            console.log(user);
            _this.storeUser(user);
        })
            .catch(function (error) {
            console.log(error);
            var toast = _this.toastCtrl.create({
                message: error._body,
                duration: 2000
            });
            toast.present();
            console.log(error);
        });
    };
    LoginPage.prototype.storeUser = function (user) {
        console.log(user);
        if (user.user.is_active === 0) {
            this.goVerify(user);
        }
        else {
            this.storage.set('is_notify', user.user.is_notify);
            this.storage.set('user', user);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */], {}, {
                animate: true,
                direction: 'forward'
            });
        }
    };
    LoginPage.prototype.goRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_users_register_user_register__["a" /* UserRegisterPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    LoginPage.prototype.goVerify = function (user) {
        // console.log(user);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_users_verify_token_verify_token__["a" /* VerifyTokenPage */], { user_id: user.user._id, user: user }, {
            animate: true,
            direction: 'forward'
        });
    };
    LoginPage.prototype.goReset = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_users_forgot_pass_forgot_pass__["a" /* ForgotPassPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\login\login.html"*/`\n\n<ion-content padding>\n\n  <div class="login-holder">\n\n    <div class="logo-holder">\n\n      <img class="ac-logo" src="https://cdn.filestackcontent.com/VPkdgPyoT8KDCLJEk9Xn">\n\n    </div>\n\n\n\n    <form class="form-login">\n\n      <label><input type="email" name="username" placeholder="Email or Mobile number" [(ngModel)]="posts.username" /></label>\n\n      <label><input type="password" name="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" [(ngModel)]="posts.password" /></label>\n\n      <button class="btn-green" type="submit" (click)="logMeIn()">Log In</button>\n\n    </form>\n\n    <a class="description forgot-pass" (click)="goRegister()">Register</a>\n\n    <br/>\n\n    <a class="description forgot-pass" (click)="goReset()">Forgot your password?</a>\n\n  </div>\n\n</ion-content>\n\n`/*ion-inline-end:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__shared_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var config = {
    //baseUrl : 'http://localhost:5016/api',
    baseUrl: 'https://angeles-notif.herokuapp.com/api'
};
/* harmony default export */ __webpack_exports__["a"] = (config);
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_service__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_users_verify_token_verify_token__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { MobileValidator } from '../../../shared/validator/mobile';

// import { HomePage } from '../../../pages/home/home';


var UserRegisterPage = (function () {
    function UserRegisterPage(navCtrl, storage, toastCtrl, api, formBuilder
        // private fcm: FCM
    ) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.existUser = false;
        this.userForm = formBuilder.group({
            first_name: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            last_name: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            mobile: ['+63', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required]), this.checkMobile],
            email: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            username: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])]
        });
        this.first_name = this.userForm.controls['first_name'];
        this.last_name = this.userForm.controls['last_name'];
        this.email = this.userForm.controls['email'];
        this.username = this.userForm.controls['username'];
        this.mobile = this.userForm.controls['mobile'];
        this.password = this.userForm.controls['password'];
    }
    UserRegisterPage.prototype.ionViewWillEnter = function () {
    };
    UserRegisterPage.prototype.checkMobile = function (c) {
        console.log(c.value.length);
        return new Promise(function (resolve) {
            //Fake a slow response from server
            setTimeout(function () {
                if (parseInt(c.value.length) !== 13 || parseInt(c.value.charAt(3)) !== 9) {
                    resolve({ "not valid number ": true });
                }
                resolve(null);
            }, 2000);
        });
    };
    // checkUsername(c : FormControl){
    //   return new Promise(resolve => {
    //     //Fake a slow response from server
    //     setTimeout(() => {
    //         if(c.value.length < 1){
    //           resolve({ "fill up the username": true })  
    //         }
    //         // if(parseInt(c.value.length) !== 13 || parseInt(c.value.charAt(3)) !== 9){
    //         // }
    //         resolve(null);
    //     }, 2000);
    //   });
    // }
    UserRegisterPage.prototype.addUser = function () {
        var _this = this;
        this.is_active = 0;
        // console.log(MobileValidator.checkMobile);
        // var field = {
        //   mobile : this.mobile,
        //   first_name : this.first_name
        // }
        this.submitAttempt = true;
        // if(!this.validateField(field)){
        //     return
        // }
        console.log(this.userForm);
        if (!this.userForm.valid) {
            var toast = this.toastCtrl.create({
                message: "Need to fill up all ",
                duration: 2000
            });
            toast.present();
            return false;
        }
        if (this.userForm.valid) {
            var mobile = this.mobile.toString();
            this.api.Users.add(this.first_name.value, this.last_name.value, this.mobile.value, this.email.value, this.username.value, this.password.value, this.is_active)
                .then(function (post) {
                console.log(post);
                if (post) {
                    var generateToken = __WEBPACK_IMPORTED_MODULE_4__providers_utils_service__["a" /* UtilService */].generateRandomToken();
                    _this.api.MobileToken.add(generateToken, _this.first_name, _this.last_name, mobile, _this.email, _this.username, _this.password, _this.is_active).then(function (mobile_token) {
                        if (mobile_token.user) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_users_verify_token_verify_token__["a" /* VerifyTokenPage */], { user_id: mobile_token.user._id, user: mobile_token.user }, {
                                animate: true,
                                direction: 'forward'
                            });
                        }
                    });
                }
                console.log('added');
            }).catch(function (error) {
                _this.existUser = true;
                return;
            });
        }
    };
    UserRegisterPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    UserRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-register',template:/*ion-inline-start:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\users\register\user-register.html"*/`<ion-header>\n\n  <ion-navbar color="main">\n\n    <ion-title text-center>\n\n     Register\n\n    </ion-title>\n\n    <a (click)=\'goBack()\' class="back-btn"><img src="https://cdn.filestackcontent.com/EBEl5OK0TKmGOOjWI1Kw"/></a>\n\n    <!-- <ion-buttons end>\n\n      <button ion-button (click)=\'addUser()\'>Add</button>\n\n    </ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<form [formGroup]="userForm" (ngSubmit)=\'addUser()\'>\n\n  <ion-row>\n\n    <!-- <img class="addPhoto" src="assets/images/medicine_logo.png"> -->\n\n    <ion-item>\n\n      <ion-label color="main" floating>First Name</ion-label>\n\n      <ion-input type="text" formControlName="first_name" [class.invalid]="!userForm.controls.first_name.valid && (userForm.controls.first_name.dirty || submitAttempt)" text-left></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="main" floating>Last Name</ion-label>\n\n      <ion-input type="text"  [class.invalid]="!userForm.controls.last_name.valid && (userForm.controls.last_name.dirty || submitAttempt)" formControlName="last_name"  text-left></ion-input>\n\n    </ion-item>\n\n      <ion-item>\n\n       <ion-label color="main" floating>Phone</ion-label>\n\n      <ion-input type="text" value="+63"  [class.invalid]="!userForm.controls.mobile.valid && (userForm.controls.mobile.dirty || submitAttempt)" formControlName="mobile" maxlength="13" text-left></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n      <ion-label color="main" floating>Email</ion-label>\n\n      <ion-input type="email" formControlName="email" [class.invalid]="!userForm.controls.email.valid && (userForm.controls.email.dirty || submitAttempt)" text-left></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n      <ion-label color="main" floating>Username</ion-label>\n\n      <ion-input type="text" formControlName="username" [ngClass]= "existUser ? \'exist_username\' : not_exist "  text-left></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n      <ion-label color="main" floating>Password</ion-label>\n\n      <ion-input type="password" formControlName="password"  [class.invalid]="!userForm.controls.password.valid && (userForm.controls.password.dirty || submitAttempt)"  text-left></ion-input>\n\n    </ion-item>\n\n  </ion-row><br>\n\n\n\n  <button ion-button round full type="submit">Register</button>\n\n  </form>\n\n</ion-content>\n\n`/*ion-inline-end:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\users\register\user-register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]
            // private fcm: FCM
        ])
    ], UserRegisterPage);
    return UserRegisterPage;
}());

//# sourceMappingURL=user-register.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UtilService = (function () {
    function UtilService() {
    }
    UtilService.generateRandomToken = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (var i = 0; i < 5; i++) {
            text += String(possible).charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    UtilService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], UtilService);
    return UtilService;
}());

//# sourceMappingURL=utils.service.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarNav; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_feedback_feedback__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_users_users_edit_user_edit__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { FCM } from '@ionic-native/fcm';
var SidebarNav = (function () {
    function SidebarNav(navCtrl, storage, 
        // private fcm: FCM
        api, menuCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.api = api;
        this.menuCtrl = menuCtrl;
        this.hasData = false;
        this.is_notify = false;
        this.storage.get('user').then(function (user) {
            console.log(user.user.is_notify);
            _this.is_notify = user.user.is_notify;
        });
    }
    SidebarNav.prototype.notify = function (value) {
        var _this = this;
        this.storage.get('user')
            .then(function (user) {
            _this.api.Users.notify(value, user.user._id).then(function (user) {
                _this.storage.remove('user');
                _this.storage.set('user', user);
            });
        });
    };
    SidebarNav.prototype.toFeedBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_feedback_feedback__["a" /* FeedbackPage */], {
            test: 'test'
        });
    };
    SidebarNav.prototype.toEdit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_users_users_edit_user_edit__["a" /* UserEditPage */]);
    };
    SidebarNav.prototype.openMenu = function () {
        this.menuCtrl.open('#sidebar');
    };
    SidebarNav = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'navsidebar',template:/*ion-inline-start:"G:\projects\push-notif-folder\push-notif-mobile\src\shared\sidebar\sidebar.html"*/`<ion-menu [content]="sidebar">\n\n  <ion-content padding>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>Push Notification</ion-label>\n\n        <ion-toggle (ionChange)="notify(is_notify)" [(ngModel)]="is_notify" color="secondary"></ion-toggle>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <a class="sidebar-link" (click)="toEdit()">Edit Profile</a>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <a class="sidebar-link" (click)="toFeedBack()" >Feedback</a>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav #sidebar></ion-nav>\n\n`/*ion-inline-end:"G:\projects\push-notif-folder\push-notif-mobile\src\shared\sidebar\sidebar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], SidebarNav);
    return SidebarNav;
}());

//# sourceMappingURL=sidebar.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SOCKET_HOST; });
var SOCKET_HOST = "http://localhost:3000";
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackThankYouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { FCM } from '@ionic-native/fcm';
var FeedbackThankYouPage = (function () {
    function FeedbackThankYouPage(navCtrl, storage, socketService, 
        // private fcm: FCM
        api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.socketService = socketService;
        this.api = api;
        this.is_verify = '';
        //this.is_verify = navParamsCtrl.get('is_verify');
        this.storage.get('user').then(function (data) {
            _this.is_verify = data.user.is_verify;
            console.log(_this.is_verify);
            console.log(data.user.is_verify);
        });
    }
    FeedbackThankYouPage.prototype.backToPost = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */], {
            hello: 'test'
        });
    };
    FeedbackThankYouPage.prototype.logoutBtn = function () {
        this.navCtrl.pop();
    };
    FeedbackThankYouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-thank-you',template:/*ion-inline-start:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\feedback_thankyou\thankyou.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Push notification for A.C\n\n    </ion-title>\n\n    <a (click)=\'logoutBtn()\' class="back-btn"><img src="https://cdn.filestackcontent.com/EBEl5OK0TKmGOOjWI1Kw"/></a>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<h4>Thank you!</h4>\n\n	<div *ngIf="is_verify == \'1\';else verify">\n\n    <p>We will read your feedback shortly</p>\n\n  </div>\n\n    <ng-template #verify>We have received your feedback. Please verify your email first. Thank you!</ng-template>\n\n    <br>\n\n  <div class="button-holder">\n\n  <button ion-button (click)="backToPost()">Back to post</button>\n\n  </div>\n\n</ion-content>\n\n`/*ion-inline-end:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\feedback_thankyou\thankyou.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */]])
    ], FeedbackThankYouPage);
    return FeedbackThankYouPage;
}());

//# sourceMappingURL=thankyou.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostViewPage = (function () {
    function PostViewPage(navCtrl, navParamsCtrl, storage, api) {
        this.navCtrl = navCtrl;
        this.navParamsCtrl = navParamsCtrl;
        this.storage = storage;
        this.api = api;
        this.save_post = {};
    }
    PostViewPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.api.Posts.view(this.navParamsCtrl.data._id).then(function (post) {
            _this._id = post.results[0]._id;
            _this.title = post.results[0].title;
            _this.description = post.results[0].description;
            _this.img = post.results[0].img;
            _this.comment_docs = post.results[0].comment_docs;
        });
        this.storage.get('user').then(function (user) {
            _this.user_id = user.user._id;
            _this.fullname = user.user.first_name + ' ' + user.user.last_name;
        });
        console.log(this);
    };
    PostViewPage.prototype.postComment = function () {
        var _this = this;
        this.api.Comments.add(this.user_id, this._id, this.save_post.description, this.fullname)
            .then(function (comments) {
            _this.api.Posts.view(_this._id).then(function (post) {
                _this.comment_docs = post.results[0].comment_docs;
            });
        });
    };
    PostViewPage.prototype.ionViewDidEnter = function () {
    };
    PostViewPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    PostViewPage.prototype.updateUser = function () {
        //   this.is_active = 0;
        // this.api.Users.edit(this._id,this.first_name,this.last_name,this.mobile,this.email,this.username,this.password)
        // .then(post =>{
        //     console.log(post);
        //     console.log('update');
        // });
        // this.navCtrl.pop();
    };
    PostViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'view-post',template:/*ion-inline-start:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\post\view-post\view-post.html"*/`\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Push notification for A.C\n\n    </ion-title>\n\n    <a (click)=\'goBack()\' class="back-btn"><img src="https://cdn.filestackcontent.com/EBEl5OK0TKmGOOjWI1Kw"/></a>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="post-holder">\n\n    <div class="post-header">\n\n      <img src="https://cdn.filestackcontent.com/VPkdgPyoT8KDCLJEk9Xn" alt="Angeles City Logo" />\n\n      <span>\n\n        <h6>{{title}}</h6>\n\n        <a href="#" class="date">@LungsodngAngeles  &bull; {{ created_at | date: format : timezone }}</a>\n\n      </span>\n\n    </div>\n\n    <p>\n\n      {{description}}\n\n    </p>\n\n    <img class="post-image" src="{{img}}" alt="" [hidden]="!img">\n\n    <ion-item class="comment-content" *ngFor="let comment of comment_docs">\n\n      <span class="name">{{comment.fullname}}</span><span class="date">{{ comment.created_at | date: format : timezone }}</span>\n\n      <p class="content">{{ comment.description }}</p>\n\n    </ion-item>\n\n    <ion-item class="comment-field">\n\n       <form class="comment" (ngSubmit)="postComment()">\n\n         <div class="form-group">\n\n           <input class="form-control" type="text" clearInput name="post-comment" [(ngModel)]="save_post.description" placeholder="Write a comment">\n\n           <!-- <input type="submit" value="POST" > -->\n\n         </div>\n\n         <button class="btn btn-green">Post</button>\n\n       </form>\n\n    </ion-item>\n\n  </div>\n\n</ion-content>\n\n`/*ion-inline-end:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\post\view-post\view-post.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */]])
    ], PostViewPage);
    return PostViewPage;
}());

//# sourceMappingURL=view-post.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPassPage = (function () {
    function ForgotPassPage(navCtrl, storage, toastCtrl, api) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.api = api;
    }
    ForgotPassPage.prototype.ionViewWillEnter = function () {
    };
    ForgotPassPage.prototype.resetPass = function () {
        var _this = this;
        this.api.Users.password_reset(this.email).then(function (user) {
            _this.message = 'An email has been sent for your new password';
        }).catch(function (err) {
            _this.message = err._body;
            var toast = _this.toastCtrl.create({
                message: err._body,
                duration: 2000
            });
            toast.present();
        });
    };
    ForgotPassPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ForgotPassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'forgot-pass',template:/*ion-inline-start:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\users\forgot-pass\forgot-pass.html"*/`<ion-header>\n\n  <ion-navbar color="main">\n\n    <ion-title text-center>\n\n     Forgot Password\n\n    </ion-title>\n\n    <a (click)=\'goBack()\' class="back-btn"><img src="https://cdn.filestackcontent.com/EBEl5OK0TKmGOOjWI1Kw"/></a>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n     <ion-item>\n\n      <ion-label color="main" floating>Email</ion-label>\n\n      <ion-input type="email" [(ngModel)]="email" text-left></ion-input>\n\n    </ion-item>\n\n    <ion-item class="msg">\n\n      <small>{{message}}</small>\n\n   </ion-item>\n\n  </ion-row>\n\n\n\n  <button ion-button round full (click)="resetPass()">Reset password</button>\n\n</ion-content>\n\n`/*ion-inline-end:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\users\forgot-pass\forgot-pass.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */]])
    ], ForgotPassPage);
    return ForgotPassPage;
}());

//# sourceMappingURL=forgot-pass.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserAddPage = (function () {
    function UserAddPage(navCtrl, storage, api) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.api = api;
    }
    UserAddPage.prototype.ionViewWillEnter = function () {
    };
    UserAddPage.prototype.addUser = function () {
        this.is_active = 0;
        this.api.Users.add(this.first_name, this.last_name, this.mobile, this.email, this.username, this.password, this.is_active)
            .then(function (post) {
            console.log(post);
            console.log('added');
        });
    };
    UserAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-add',template:/*ion-inline-start:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\users\users-add\user-add.html"*/`<ion-header>\n\n  <ion-navbar color="main">\n\n    <ion-title text-center>\n\n      Add User\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)=\'addUser()\'>Add</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <!-- <img class="addPhoto" src="assets/images/medicine_logo.png"> -->\n\n    <ion-item>\n\n      <ion-label color="main" floating>First Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="first_name" text-left></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="main" floating>Last Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="last_name" text-left></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="main" floating>Phone</ion-label>\n\n      <ion-input type="text" [(ngModel)]="mobile" text-left></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n      <ion-label color="main" floating>Email</ion-label>\n\n      <ion-input type="email" [(ngModel)]="email" text-left></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n      <ion-label color="main" floating>Username</ion-label>\n\n      <ion-input type="text" [(ngModel)]="username" text-left></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n      <ion-label color="main" floating>Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="password" text-left></ion-input>\n\n    </ion-item>\n\n  </ion-row><br>\n\n</ion-content>`/*ion-inline-end:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\users\users-add\user-add.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */]])
    ], UserAddPage);
    return UserAddPage;
}());

//# sourceMappingURL=user-add.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(389);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_path__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_users_users_add_user_add__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_users_register_user_register__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_users_users_list_user_list__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_users_users_edit_user_edit__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_users_verify_token_verify_token__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_post_view_post_view_post__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_users_forgot_pass_forgot_pass__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_feedback_feedback__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_feedback_thankyou_thankyou__ = __webpack_require__(375);
throw new Error("Cannot find module \"angularfire2\"");
throw new Error("Cannot find module \"angularfire2/database\"");
throw new Error("Cannot find module \"angularfire2/storage\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_sidebar_sidebar__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_base64__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//pages














// shared



// import firebase from 'firebase';
//providers
// import { UtilService } from '../providers/utils.service';
// import { SocketService } from '../providers/socket.service';

var firebaseConfig = {
    apiKey: "AIzaSyBH_hBgUME25UVzGYE7sani2eYrgGiyh4M",
    authDomain: "test-6148c.firebaseapp.com",
    databaseURL: "https://test-6148c.firebaseio.com",
    projectId: "test-6148c",
    storageBucket: "test-6148c.appspot.com",
    messagingSenderId: "469373891917"
    //   apiKey: 'AIzaSyC1tBMy-SERawwY4F5WBwrUdKajXrLkuxA',
    // authDomain: 'pushnotification-1092d.firebaseapp.com',
    // databaseURL: 'https://pushnotification-1092d.firebaseio.com',
    // projectId: 'pushnotification-1092d',
    // storageBucket: 'pushnotification-1092d.appspot.com',
    // messagingSenderId: '134945683401'
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_27__shared_sidebar_sidebar__["a" /* SidebarNav */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_users_users_add_user_add__["a" /* UserAddPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_users_users_list_user_list__["a" /* UserListPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_users_users_edit_user_edit__["a" /* UserEditPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_users_register_user_register__["a" /* UserRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_users_verify_token_verify_token__["a" /* VerifyTokenPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_post_view_post_view_post__["a" /* PostViewPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_users_verify_token_verify_token__["a" /* VerifyTokenPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_users_forgot_pass_forgot_pass__["a" /* ForgotPassPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_feedback_thankyou_thankyou__["a" /* FeedbackThankYouPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_23_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_25_angularfire2_storage__["AngularFireStorageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_27__shared_sidebar_sidebar__["a" /* SidebarNav */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_users_users_add_user_add__["a" /* UserAddPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_users_users_list_user_list__["a" /* UserListPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_users_users_edit_user_edit__["a" /* UserEditPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_users_register_user_register__["a" /* UserRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_users_verify_token_verify_token__["a" /* VerifyTokenPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_post_view_post_view_post__["a" /* PostViewPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_users_verify_token_verify_token__["a" /* VerifyTokenPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_users_forgot_pass_forgot_pass__["a" /* ForgotPassPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_feedback_thankyou_thankyou__["a" /* FeedbackThankYouPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_26__shared_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_29__providers__["b" /* UtilService */],
                __WEBPACK_IMPORTED_MODULE_29__providers__["a" /* SocketService */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_base64__["a" /* Base64 */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_feedback_feedback__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        var _this = this;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.has_login = false;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.storage.get('user').then(function (user) {
            if (user != null) {
                console.log('test');
                _this.has_login = true;
            }
        });
    }
    MyApp.prototype.toFeedBack = function () {
        var _this = this;
        this.storage.get('user').then(function (user) {
            if (user == null) {
                _this.errorMessage = 'you must login first';
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_feedback_feedback__["a" /* FeedbackPage */], {
                    test: 'test'
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('test'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"G:\projects\push-notif-folder\push-notif-mobile\src\app\app.html"*/`<!--\n\n      <ion-item>\n\n        <a class="sidebar-link" (click)="toFeedBack()" >Feedback</a>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav #sidebar></ion-nav>\n\n\n\n<ion-nav [root]="rootPage" #sidebar #test></ion-nav> -->\n\n\n\n<ion-nav [root]="rootPage"></ion-nav>\n\n`/*ion-inline-end:"G:\projects\push-notif-folder\push-notif-mobile\src\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketService = (function () {
    function SocketService() {
        // this.messages = Observable.create(observer => {
        //    this.socketObserver = observer;
        //  });
        //  this.notify = Observable.create(observerNotify => {
        //    this.socketObserverNotify = observerNotify;
        //  });   
        //  this.popup = Observable.create(observerPopup => {
        //    this.socketObserverPopUp = observerPopup;
        //  });
        this.init();
    }
    SocketService.prototype.init = function () {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* SOCKET_HOST */], { autoConnect: true });
        this.socket.on("connect", function () {
            // console.log('***Socket Connected***');
        });
        this.socket.on("reconnecting", function (attempt) {
            // console.log('***Socket Reconnecting***', attempt);
        });
        this.socket.on("reconnect_failed", function () {
            // console.log('***Socket Reconnect failed***');
        });
        this.socket.on('disconnect', function () {
            // console.log('***Socket Disconnected***');
        });
        // Get Message Response
        this.socket.on('message', function (response) {
            // let chatMessage: ChatMessage = response;
            console.log(response);
            // chatMessage.epoch = UtilService.getEpoch();
            // this.socketObserver.next(chatMessage);
        });
        // Real time notification
        this.socket.on('notify', function (response) {
            // let chatNofitication: ChatNotification = response;
            console.log(response);
            // this.socketObserverNotify.next(chatNofitication);
        });
        // Real time popup response
        this.socket.on('popup', function (response) {
            // let popUp: DealMessage = response
            console.log(response);
            // this.socketObserverPopUp.next(popUp);
        });
    };
    // newRequest(chatMessage: ChatMessage) {
    //   // Send message
    //   // chatMessage.epoch = UtilService.getEpoch();
    //   // this.socketObserver.next(chatMessage);
    //   // this.socket.emit('message_send', chatMessage);
    // }
    // popupRequest(popup: DealMessage) {
    //   console.log('popup ' + popup);
    //   // popup.epoch = UtilService.getEpoch();
    //   // this.socketObserverPopUp.next(popup);
    //   // this.socket.emit('popup_send', popup);
    // }
    SocketService.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    SocketService.prototype.connect = function () {
        this.socket.connect();
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());

//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_add_user_add__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_edit_user_edit__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserListPage = (function () {
    function UserListPage(navCtrl, storage, api) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.api = api;
    }
    UserListPage.prototype.ionViewWillEnter = function () {
    };
    UserListPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.api.Users.list().then(function (data) {
            _this.users = data;
            console.log(_this.users);
        }, function (error) { });
        // console.log()
    };
    UserListPage.prototype.editUser = function (user_id) {
        var _this = this;
        this.api.Users.view(user_id).then(function (user) {
            console.log(user);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__users_edit_user_edit__["a" /* UserEditPage */], {
                _id: user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                mobile: user.mobile,
                email: user.email,
                username: user.username,
                password: user.password
            });
        });
    };
    UserListPage.prototype.addUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__users_add_user_add__["a" /* UserAddPage */]);
        //   this.is_active = 0;
        //   this.api.Users.add(this.first_name,this.last_name,this.phone_number,this.email_add,this.username,this.password,this.is_active)
        //   .then(post =>{
        //       console.log(post);
        //       console.log('added');
        //   });
    };
    UserListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-list',template:/*ion-inline-start:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\users\users-list\user-list.html"*/`<ion-header>\n\n  <ion-navbar color="main">\n\n    <button ion-button menuToggle icon-only>\n\n      <ion-icon name=\'menu\'></ion-icon>\n\n    </button>\n\n    <ion-title text-center>\n\n      Users\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addUser()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let user of users">\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/emoji.png"/>\n\n        </ion-avatar>\n\n        <h2>{{ user.first_name }} {{ user.last_name }}</h2>\n\n        <ion-note item-end></ion-note>\n\n      </ion-item>\n\n      <ion-item-options>\n\n        <button ion-button color="secondary" icon-only (click)="editUser(user._id)">\n\n          <ion-icon name="create"></ion-icon>\n\n        </button>\n\n        <button ion-button color="danger" icon-only (click)="removeUser(user._id)">\n\n          <ion-icon name="trash"></ion-icon>\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n`/*ion-inline-end:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\users\users-list\user-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */]])
    ], UserListPage);
    return UserListPage;
}());

//# sourceMappingURL=user-list.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_sidebar_sidebar__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__post_view_post_view_post__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__feedback_feedback__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { FCM } from '@ionic-native/fcm';
var HomePage = (function () {
    function HomePage(navCtrl, storage, socketService, 
        // private fcm: FCM
        api, menuCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.socketService = socketService;
        this.api = api;
        this.menuCtrl = menuCtrl;
        this.hasData = false;
        this.is_notify = false;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('user')
            .then(function (user) {
            _this.users = user;
        });
        this.page = "1";
        this.pageSize = "10";
        this.title = "";
        this.description = "";
        // this.date_filter = new Date(this.date_filter);
        this.api.Posts.list(this.page, this.pageSize, this.title, this.description, this.date_filter).then(function (posts) {
            console.log(posts);
            _this.posts = posts.results;
            _this.hasData = true;
        });
    };
    HomePage.prototype.filterPost = function () {
        var _this = this;
        this.date_filter = new Date(this.date_filter).toString();
        // console.log(this);
        console.log(this.date_filter);
        this.api.Posts.list(this.page, this.pageSize, this.title, this.description, this.date_filter).then(function (posts) {
            console.log(posts);
            _this.posts = posts.results;
            _this.hasData = true;
        });
    };
    HomePage.prototype.selectedPost = function (post) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__post_view_post_view_post__["a" /* PostViewPage */], {
            _id: post._id
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        // console.log('Begin async operation', refresher);
        // setTimeout(() => {
        //   console.log('Async operation has ended');
        //   refresher.complete();
        // }, 2000);
        // console.log(socketService.connect());
    };
    HomePage.prototype.postComment = function (post) {
        // console.log(this.user_comment)
        console.log(post);
        this.api.Comments.add(this.users['_id'], post._id, post.field)
            .then(function (comments) {
            console.log(comments);
            console.log('added');
        });
    };
    HomePage.prototype.toFeedBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__feedback_feedback__["a" /* FeedbackPage */], {
            test: 'test'
        });
    };
    HomePage.prototype.logoutBtn = function () {
        this.storage.clear();
        console.log(this.storage);
        this.navCtrl.pop();
    };
    HomePage.prototype.notify = function (value) {
        this.api.Users.notify(value, this.users.user._id).then(function (user) {
            console.log(user);
        });
    };
    HomePage.prototype.openMenu = function () {
        this.menuCtrl.open('#sidebar');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\home\home.html"*/`<!-- <ion-menu [content]="sidebar">\n\n  <ion-content padding>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>Push Notification</ion-label>\n\n        <ion-toggle [(ngModel)]="notification" color="secondary"></ion-toggle>\n\n      </ion-item>\n\n      <ion-item>\n\n        <a class="sidebar-link">Edit Profile</a>\n\n      </ion-item>\n\n      <ion-item>\n\n        <a class="sidebar-link" (click)="toFeedBack()" >Feedback</a>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav #sidebar></ion-nav> -->\n\n\n\n<navsidebar></navsidebar>\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Push notification for A.C\n\n    </ion-title>\n\n    <a (click)=\'logoutBtn()\' class="logout-btn"><img src="https://cdn.filestackcontent.com/CJMyS34SVmEdMrx42D6N"/></a>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding *ngIf="hasData">\n\n  <div class="holder">\n\n    <div class="container">\n\n      <div class="row">\n\n        <div class="col-12">\n\n          <div class="heading-holder">\n\n            <h4>RECENT POSTS</h4>\n\n          </div>\n\n\n\n          <button class="filter-btn" (click)=\'filterPost()\'>Filter</button>\n\n          <div class="filter-holder">\n\n            <input type="text" [(ngModel)]="title" placeholder="by title">\n\n            <input type="text" [(ngModel)]="description" placeholder="by description">\n\n          </div>\n\n          <ion-refresher (ionRefresh)="doRefresh($event)">\n\n            <ion-refresher-content\n\n              pullingIcon="arrow-dropdown"\n\n              pullingText="Pull to refresh"\n\n              refreshingSpinner="circles"\n\n              refreshingText="Refreshing...">\n\n            </ion-refresher-content>\n\n          </ion-refresher>\n\n\n\n          <br>\n\n          <!-- <button class="filter-btn" (click)="toFeedBack()" >Feedback</button> -->\n\n          <div class="post-holder" (click)=\'selectedPost(post)\' *ngFor="let post of posts">\n\n            <div class="post-header">\n\n              <img src="https://cdn.filestackcontent.com/VPkdgPyoT8KDCLJEk9Xn" alt="Angeles City Logo" />\n\n              <span>\n\n                <h6>{{post.title}}</h6>\n\n                <a href="#" class="date">@LungsodngAngeles  &bull; {{ post.created_at | date: format : timezone }}</a>\n\n              </span>\n\n            </div>\n\n            <img class="post-image" src="{{post.img}}" alt="" [hidden]="!post.img">\n\n            <p>\n\n              {{post.description}}\n\n            </p>\n\n            <!-- <ul>\n\n              <li><a href="#" class="date">{{ post.created_at | date: format : timezone }}</a></li>\n\n              <li><a href="#" class="website">www.angelescity.gov.ph</a></li>\n\n              <li><a href="#" class="social">@LungsodngAngeles</a></li>\n\n            </ul> -->\n\n             <form class="comment">\n\n               <div class="form-group">\n\n                 <input class="form-control" type="text" clearInput name="post-comment-{{ i }}" [(ngModel)]="post.field" placeholder="Add a comment">\n\n                 <!-- <input type="submit" value="POST" > -->\n\n               </div>\n\n               <button ion-button round (click)=\'postComment(post)\' class="btn btn-green">Post</button>\n\n             </form>\n\n            <!-- <ion-item class="comment-content" *ngFor="let comment of post.comment_docs">\n\n                <div>{{ comment.description }}</div>\n\n            </ion-item> -->\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n       <!-- <button ion-button (click)=\'logoutBtn()\'>Log out</button> -->\n\n</ion-content>\n\n`/*ion-inline-end:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\home\home.html"*/,
            directives: [__WEBPACK_IMPORTED_MODULE_4__shared_sidebar_sidebar__["a" /* SidebarNav */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feedback_thankyou_thankyou__ = __webpack_require__(375);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { FCM } from '@ionic-native/fcm';
var FeedbackPage = (function () {
    function FeedbackPage(navCtrl, storage, socketService, toastCtrl, 
        // private fcm: FCM
        api) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.socketService = socketService;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.feedback = {};
    }
    FeedbackPage.prototype.feedbackForm = function () {
        var _this = this;
        if (Object.keys(this.feedback).length < 2) {
            var toast = this.toastCtrl.create({
                message: "Required All",
                duration: 2000
            });
            toast.present();
            return;
        }
        if (Object.keys(this.feedback).length == 2) {
            this.storage.get('user').then(function (data) {
                _this.api.Feedback.add(_this.feedback.title, _this.feedback.description, data.user._id, data.user.is_verify, data.user.email).then(function (feedback) {
                    console.log(feedback);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__feedback_thankyou_thankyou__["a" /* FeedbackThankYouPage */], {
                        hello: 'test'
                    });
                });
            });
        }
    };
    FeedbackPage.prototype.logoutBtn = function () {
        this.navCtrl.pop();
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\feedback\feedback.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Push notification for A.C\n\n    </ion-title>\n\n    <a (click)=\'logoutBtn()\' class="back-btn"><img src="https://cdn.filestackcontent.com/EBEl5OK0TKmGOOjWI1Kw"/></a>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<h4>FeedBack</h4>\n\n	<form (ngSubmit)="feedbackForm()">\n\n	<ion-item>\n\n        <ion-label floating>Title</ion-label>\n\n        <ion-input type="text" [(ngModel)]="feedback.title" name="title"></ion-input>\n\n      </ion-item>\n\n		<ion-item>\n\n        <ion-label floating>Description</ion-label>\n\n        	<ion-textarea [(ngModel)]="feedback.description" name="description"></ion-textarea>\n\n      </ion-item>\n\n      <br>\n\n      <button ion-button type="submit" block>Send FeedBack</button>\n\n	</form>\n\n</ion-content>\n\n`/*ion-inline-end:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\feedback\feedback.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers__["a" /* SocketService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */]) === "function" && _e || Object])
    ], FeedbackPage);
    return FeedbackPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(362);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_service__ = __webpack_require__(360);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__utils_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socket_service__ = __webpack_require__(716);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__socket_service__["a"]; });

// export * from './sql';
// export * from './database.service';
// export * from './model';


//# sourceMappingURL=index.js.map

/***/ })

},[384]);
//# sourceMappingURL=main.js.map