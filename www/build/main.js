webpackJsonp([0],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, storage, 
        // private fcm: FCM
        api) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.api = api;
        this.hasData = false;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('user')
            .then(function (user) {
            _this.users = user;
        });
        this.api.Posts.list().then(function (posts) {
            console.log(posts);
            _this.posts = posts.results;
            _this.hasData = true;
        });
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
    };
    HomePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\SirManny\Documents\Jake\ionic\push-notif-mobile\src\pages\home\home.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Push notification for A.C\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding *ngIf="hasData">\n\n  <div class="holder">\n\n    <div class="container">\n\n      <div class="row">\n\n        <div class="col-12">\n\n          <div class="heading-holder">\n\n            <h4>RECENT POSTS</h4>\n\n          </div>\n\n           <ion-refresher (ionRefresh)="doRefresh($event)">\n\n            <ion-refresher-content\n\n              pullingIcon="arrow-dropdown"\n\n              pullingText="Pull to refresh"\n\n              refreshingSpinner="circles"\n\n              refreshingText="Refreshing...">\n\n            </ion-refresher-content>\n\n          </ion-refresher>\n\n          <div class="post-holder" *ngFor="let post of posts">\n\n            <div class="post-header">\n\n              <img src="../../assets/imgs/logo.png" alt="Angeles City Logo" />\n\n              <h6>{{post.title}}</h6>\n\n            </div>\n\n            <p>\n\n              {{post.description}}\n\n            </p>\n\n            <img width="100" src="{{post.img}}" alt="">\n\n            <ul>\n\n              <li><a href="#" class="date">NOVEMBER 24, 2017</a></li>\n\n              <li><a href="#" class="website">www.angelescity.gov.ph</a></li>\n\n              <li><a href="#" class="social">@LungsodngAngeles</a></li>\n\n            </ul>\n\n            <ion-item>\n\n               <form class="comment" >\n\n               <div class="form-group">\n\n                 <input class="form-control" type="text" clearInput name="post-comment-{{ i }}" [(ngModel)]="post.field" placeholder="Write a comment">\n\n                 <!-- <input type="submit" value="POST" > -->\n\n               </div>\n\n                 <button ion-button round (click)=\'postComment(post)\' class="btn btn-green">Post</button>\n\n\n\n             </form>\n\n            </ion-item>\n\n              <ion-item *ngFor="let comment of post.comment_docs">\n\n                  <div>{{ comment.description }}</div>\n\n\n\n              </ion-item>\n\n              \n\n          </div>\n\n      </div>\n\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\SirManny\Documents\Jake\ionic\push-notif-mobile\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 163:
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
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 208:
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
webpackEmptyAsyncContext.id = 208;

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_api_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_config__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_users_register_user_register__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_users_verify_token_verify_token__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(150);
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
    function LoginPage(navCtrl, storage, api, http) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.api = api;
        this.http = http;
        this.posts = {
            username: '',
            password: '',
            in_mobile: true
        };
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('user')
            .then(function (user) {
            if (user) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */], {}, {
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
            _this.storeUser(user);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.storeUser = function (user) {
        console.log(user);
        if (user.user.is_active === 0) {
            this.goVerify(user);
        }
        else {
            this.storage.set('user', user);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */], {}, {
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
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\SirManny\Documents\Jake\ionic\push-notif-mobile\src\pages\login\login.html"*/`\n\n<ion-content padding>\n\n  <div class="login-holder">\n\n    <div class="logo-holder">\n\n      <img class="ac-logo" src="../../assets/imgs/logo.png">\n\n    </div>\n\n\n\n    <form class="form-login">\n\n      <label><input type="email" name="username" placeholder="Email or Mobile number" [(ngModel)]="posts.username" /></label>\n\n      <label><input type="password" name="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" [(ngModel)]="posts.password" /></label>\n\n      <button class="btn-green" type="submit" (click)="logMeIn()">Log In</button>\n\n    </form>\n\n    <a class="description forgot-pass" (click)="goRegister()">Register</a>\n\n    <br/>\n\n    <a class="description forgot-pass" (click)="goReset()">Forgot your password?</a>\n\n  </div>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\SirManny\Documents\Jake\ionic\push-notif-mobile\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__shared_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var config = {
    baseUrl: 'http://localhost:5015/api',
};
/* harmony default export */ __webpack_exports__["a"] = (config);
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_service__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserRegisterPage = (function () {
    function UserRegisterPage(navCtrl, storage, toastCtrl, api) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.api = api;
    }
    UserRegisterPage.prototype.ionViewWillEnter = function () {
    };
    UserRegisterPage.prototype.addUser = function () {
        var _this = this;
        this.is_active = 0;
        var field = {
            mobile: this.mobile
        };
        if (!this.validateField(field)) {
            return;
        }
        console.log();
        var mobile = this.selected_number + "" + this.mobile;
        this.api.Users.add(this.first_name, this.last_name, mobile, this.email, this.username, this.password, this.is_active)
            .then(function (post) {
            console.log(post);
            if (post) {
                var generateToken = __WEBPACK_IMPORTED_MODULE_4__providers_utils_service__["a" /* UtilService */].generateRandomToken();
                _this.api.MobileToken.add(post._id, generateToken, post.username, post.password).then(function (mobile_token) {
                    console.log(mobile_token);
                });
            }
            console.log('added');
        });
    };
    UserRegisterPage.prototype.validateField = function (field) {
        if (parseInt(field.mobile.charAt(0)) !== 9 || field.mobile.length !== 10) {
            var toast = this.toastCtrl.create({
                message: "Is not valid in PHIL Phone Number  ",
                duration: 2000
            });
            toast.present();
            return false;
        }
        return true;
    };
    UserRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-register',template:/*ion-inline-start:"C:\Users\SirManny\Documents\Jake\ionic\push-notif-mobile\src\pages\users\register\user-register.html"*/`<ion-header>\n\n  <ion-navbar color="main">\n\n    <ion-title text-center>\n\n     Register\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <!-- <button ion-button (click)=\'addUser()\'>Add</button> -->\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <!-- <img class="addPhoto" src="assets/images/medicine_logo.png"> -->\n\n    <ion-item>\n\n      <ion-label color="main" floating>First Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="first_name" text-left></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="main" floating>Last Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="last_name" text-left></ion-input>\n\n    </ion-item>\n\n      <ion-item>\n\n      <ion-input type="text" value="+63"  [(ngModel)]="selected_number" text-left></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="main" floating>Phone</ion-label>\n\n      <ion-input type="text" [(ngModel)]="mobile" maxlength="10" text-left></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n      <ion-label color="main" floating>Email</ion-label>\n\n      <ion-input type="email" [(ngModel)]="email" text-left></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n      <ion-label color="main" floating>Username</ion-label>\n\n      <ion-input type="text" [(ngModel)]="username" text-left></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n      <ion-label color="main" floating>Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="password" text-left></ion-input>\n\n    </ion-item>\n\n  </ion-row><br>\n\n\n\n  <button ion-button round full (click)=\'addUser()\'>Register</button>\n\n</ion-content>`/*ion-inline-end:"C:\Users\SirManny\Documents\Jake\ionic\push-notif-mobile\src\pages\users\register\user-register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */]])
    ], UserRegisterPage);
    return UserRegisterPage;
}());

//# sourceMappingURL=user-register.js.map

/***/ }),

/***/ 347:
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
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
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

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyTokenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(150);
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
        this.navCtrl.pop();
    };
    VerifyTokenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'verify-token',template:/*ion-inline-start:"C:\Users\SirManny\Documents\Jake\ionic\push-notif-mobile\src\pages\users\verify-token\verify-token.html"*/`<ion-header>\n\n  <ion-navbar color="main">\n\n    <ion-title text-center>\n\n     Verify\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <!-- <button ion-button (click)=\'addUser()\'>Add</button> -->\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-item>\n\n      <ion-label color="main" floating>Verify with This</ion-label>\n\n      <ion-input type="text" [(ngModel)]="verify_token" text-left></ion-input>\n\n    </ion-item>\n\n  </ion-row>\n\n  <button ion-button round full (click)=\'verifyUser()\'>Verify</button>\n\n  <button ion-button round full (click)=\'backLogin()\'>Back to Login</button>\n\n</ion-content>`/*ion-inline-end:"C:\Users\SirManny\Documents\Jake\ionic\push-notif-mobile\src\pages\users\verify-token\verify-token.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */]])
    ], VerifyTokenPage);
    return VerifyTokenPage;
}());

//# sourceMappingURL=verify-token.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(39);
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
            selector: 'user-add',template:/*ion-inline-start:"C:\Users\SirManny\Documents\Jake\ionic\push-notif-mobile\src\pages\users\users-add\user-add.html"*/`<ion-header>\n\n  <ion-navbar color="main">\n\n    <ion-title text-center>\n\n      Add User\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)=\'addUser()\'>Add</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <!-- <img class="addPhoto" src="assets/images/medicine_logo.png"> -->\n\n    <ion-item>\n\n      <ion-label color="main" floating>First Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="first_name" text-left></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="main" floating>Last Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="last_name" text-left></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="main" floating>Phone</ion-label>\n\n      <ion-input type="text" [(ngModel)]="mobile" text-left></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n      <ion-label color="main" floating>Email</ion-label>\n\n      <ion-input type="email" [(ngModel)]="email" text-left></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n      <ion-label color="main" floating>Username</ion-label>\n\n      <ion-input type="text" [(ngModel)]="username" text-left></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n      <ion-label color="main" floating>Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="password" text-left></ion-input>\n\n    </ion-item>\n\n  </ion-row><br>\n\n</ion-content>`/*ion-inline-end:"C:\Users\SirManny\Documents\Jake\ionic\push-notif-mobile\src\pages\users\users-add\user-add.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */]])
    ], UserAddPage);
    return UserAddPage;
}());

//# sourceMappingURL=user-add.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserEditPage = (function () {
    function UserEditPage(navCtrl, navParamsCtrl, storage, api) {
        this.navCtrl = navCtrl;
        this.navParamsCtrl = navParamsCtrl;
        this.storage = storage;
        this.api = api;
        console.log(navParamsCtrl);
        this._id = navParamsCtrl.get('_id');
        this.first_name = navParamsCtrl.get('first_name');
        this.last_name = navParamsCtrl.get('last_name');
        this.mobile = navParamsCtrl.get('mobile');
        this.email = navParamsCtrl.get('email');
        this.username = navParamsCtrl.get('username');
        this.password = navParamsCtrl.get('password');
    }
    UserEditPage.prototype.ionViewWillEnter = function () {
    };
    UserEditPage.prototype.ionViewDidEnter = function () {
    };
    UserEditPage.prototype.updateUser = function () {
        //   this.is_active = 0;
        this.api.Users.edit(this._id, this.first_name, this.last_name, this.mobile, this.email, this.username, this.password)
            .then(function (post) {
            console.log(post);
            console.log('update');
        });
        this.navCtrl.pop();
    };
    UserEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-edit',template:/*ion-inline-start:"C:\Users\SirManny\Documents\Jake\ionic\push-notif-mobile\src\pages\users\users-edit\user-edit.html"*/`<ion-header>\n\n  <ion-navbar color="main">\n\n    <ion-title text-center>\n\n      Edit User\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)=\'updateUser()\'>Save</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <!-- <img class="addPhoto" src="assets/images/medicine_logo.png"> -->\n\n    <ion-item>\n\n      <ion-label color="main" floating>First Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="first_name" text-left></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="main" floating>Last Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="last_name" text-left></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="main" floating>Phone</ion-label>\n\n      <ion-input type="text" [(ngModel)]="mobile" text-left></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n      <ion-label color="main" floating>Email</ion-label>\n\n      <ion-input type="email" [(ngModel)]="email" text-left></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n      <ion-label color="main" floating>Username</ion-label>\n\n      <ion-input type="text" [(ngModel)]="username" text-left></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n      <ion-label color="main" floating>Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="password" text-left></ion-input>\n\n    </ion-item>\n\n  </ion-row><br>\n\n</ion-content>`/*ion-inline-end:"C:\Users\SirManny\Documents\Jake\ionic\push-notif-mobile\src\pages\users\users-edit\user-edit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */]])
    ], UserEditPage);
    return UserEditPage;
}());

//# sourceMappingURL=user-edit.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(356);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_users_users_add_user_add__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_users_register_user_register__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_users_users_list_user_list__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_users_users_edit_user_edit__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_users_verify_token_verify_token__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_api_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_utils_service__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//pages







// shared

//providers

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_users_users_add_user_add__["a" /* UserAddPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_users_users_list_user_list__["a" /* UserListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_users_users_edit_user_edit__["a" /* UserEditPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_users_register_user_register__["a" /* UserRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_users_verify_token_verify_token__["a" /* VerifyTokenPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_users_users_add_user_add__["a" /* UserAddPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_users_users_list_user_list__["a" /* UserListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_users_users_edit_user_edit__["a" /* UserEditPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_users_register_user_register__["a" /* UserRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_users_verify_token_verify_token__["a" /* VerifyTokenPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__shared_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_16__providers_utils_service__["a" /* UtilService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(403);
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
                    is_active: is_active
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
            view: function (id) {
                return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/users/view/" + id)
                    .map(function (response) {
                    return response.json();
                }).toPromise();
            },
            edit: function (user_id, first_name, last_name, mobile, email, username, password) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/users/edit/" + user_id, {
                    first_name: first_name,
                    last_name: last_name,
                    mobile: mobile,
                    email: email,
                    username: username,
                    password: password
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
            }
        };
        this.Posts = {
            list: function () {
                return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/posts/list")
                    .map(function (response) {
                    return response.json();
                }).toPromise();
            }
        };
        this.Comments = {
            list: function () {
                return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/comments/list")
                    .map(function (response) {
                    return response.json();
                }).toPromise();
            },
            add: function (user_id, post_id, description) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/comments/add", {
                    user_id: user_id,
                    post_id: post_id,
                    description: description
                })
                    .map(function (response) {
                    return response.json();
                }).toPromise();
            },
        };
        this.MobileToken = {
            add: function (user_id, generate_token, username, password) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/verify_token/add_user", {
                    user_id: user_id,
                    generate_token: generate_token,
                    username: username,
                    password: password
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
    }
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ApiService);
    return ApiService;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(254);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\SirManny\Documents\Jake\ionic\push-notif-mobile\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n\n`/*ion-inline-end:"C:\Users\SirManny\Documents\Jake\ionic\push-notif-mobile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_add_user_add__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_edit_user_edit__ = __webpack_require__(350);
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
            selector: 'user-list',template:/*ion-inline-start:"C:\Users\SirManny\Documents\Jake\ionic\push-notif-mobile\src\pages\users\users-list\user-list.html"*/`<ion-header>\n\n  <ion-navbar color="main">\n\n    <button ion-button menuToggle icon-only>\n\n      <ion-icon name=\'menu\'></ion-icon>\n\n    </button>\n\n    <ion-title text-center>\n\n      Users\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addUser()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let user of users">\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/emoji.png"/>\n\n        </ion-avatar>\n\n        <h2>{{ user.first_name }} {{ user.last_name }}</h2>\n\n        <ion-note item-end></ion-note>\n\n      </ion-item>\n\n      <ion-item-options>\n\n        <button ion-button color="secondary" icon-only (click)="editUser(user._id)">\n\n          <ion-icon name="create"></ion-icon>\n\n        </button>\n\n        <button ion-button color="danger" icon-only (click)="removeUser(user._id)">\n\n          <ion-icon name="trash"></ion-icon>\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\SirManny\Documents\Jake\ionic\push-notif-mobile\src\pages\users\users-list\user-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */]])
    ], UserListPage);
    return UserListPage;
}());

//# sourceMappingURL=user-list.js.map

/***/ })

},[351]);
//# sourceMappingURL=main.js.map