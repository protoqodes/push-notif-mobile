webpackJsonp([0],{

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 207:
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
webpackEmptyAsyncContext.id = 207;

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_api_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_config__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(345);
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
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */], {}, {
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
        this.storage.set('user', user);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\SirManny\Documents\Jake\ionic\push-notif-mobile\src\pages\login\login.html"*/`\n\n<ion-content padding>\n\n  <div class="login-holder">\n\n    <div class="logo-holder">\n\n      <img class="ac-logo" src="../../assets/imgs/logo.png">\n\n    </div>\n\n\n\n    <form class="form-login">\n\n      <label><input type="email" name="username" placeholder="Email or Mobile number" [(ngModel)]="posts.username" /></label>\n\n      <label><input type="password" name="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" [(ngModel)]="posts.password" /></label>\n\n      <button class="btn-green" type="submit" (click)="logMeIn()">Log In</button>\n\n    </form>\n\n    <a class="description forgot-pass" (click)="goReset()">Forgot your password?</a>\n\n  </div>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\SirManny\Documents\Jake\ionic\push-notif-mobile\src\pages\login\login.html"*/
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

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var config = {
    baseUrl: 'http://localhost:5015/api',
};
/* harmony default export */ __webpack_exports__["a"] = (config);
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_list_user_list__ = __webpack_require__(346);
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
    function HomePage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    HomePage.prototype.ListUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__users_users_list_user_list__["a" /* UserListPage */]);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        // this.storage.get('user')
        // .then(user => {
        // 	console.log(user)
        // })
        //  this.fcm.subscribeToTopic('news');
        //  this.fcm.getToken().then(token=>{
        //    console.log(token)
        //  // backend.registerToken(token);
        //  })
        //  this.fcm.onNotification().subscribe(data=>{
        //  if(data.wasTapped){
        //    console.log("Received in background");
        //  } else {
        //    console.log("Received in foreground");
        //  };
        //  })
        // this.fcm.onTokenRefresh().subscribe(token=>{
        //   console.log(tiken)
        // // backend.registerToken(token);
        // })
        // this.fcm.unsubscribeFromTopic('marketing');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\SirManny\Documents\Jake\ionic\push-notif-mobile\src\pages\home\home.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Push notification for A.C\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="holder">\n\n    <div class="container">\n\n      <div class="row">\n\n        <div class="col-12">\n\n          <div class="heading-holder">\n\n            <h4>RECENT POSTS</h4>\n\n          </div>\n\n          <div class="post-holder">\n\n            <div class="post-header">\n\n              <img src="../../assets/imgs/logo.png" alt="Angeles City Logo" />\n\n              <h6>Post Title</h6>\n\n            </div>\n\n            <p>\n\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n\n              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n            </p>\n\n            <ul>\n\n              <li><a href="#" class="date">NOVEMBER 24, 2017</a></li>\n\n              <li><a href="#" class="website">www.angelescity.gov.ph</a></li>\n\n              <li><a href="#" class="social">@LungsodngAngeles</a></li>\n\n            </ul>\n\n          </div>\n\n\n\n          <div class="post-holder">\n\n            <img src="../../assets/imgs/logo.png" alt="Angeles City Logo" />\n\n            <h6>Untitled</h6>\n\n            <p>\n\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n\n              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n            </p>\n\n            <ul>\n\n              <li><a href="#" class="date">NOVEMBER 24, 2017</a></li>\n\n              <li><a href="#" class="website">www.angelescity.gov.ph</a></li>\n\n              <li><a href="#" class="social">@LungsodngAngeles</a></li>\n\n            </ul>\n\n          </div>\n\n\n\n           <button ion-button icon-only (click)="ListUser()">\n\n            <ion-icon name="add"></ion-icon>\n\n          </button>\n\n      </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\SirManny\Documents\Jake\ionic\push-notif-mobile\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_add_user_add__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_edit_user_edit__ = __webpack_require__(348);
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
            selector: 'user-list',template:/*ion-inline-start:"C:\Users\SirManny\Documents\Jake\ionic\push-notif-mobile\src\pages\users\users-list\user-list.html"*/`<ion-header>\n\n  <ion-navbar color="main">\n\n    <button ion-button menuToggle icon-only>\n\n      <ion-icon name=\'menu\'></ion-icon>\n\n    </button>\n\n    <ion-title text-center>\n\n      Users\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addUser()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n<ion-list>\n\n      <ion-item-sliding *ngFor="let user of users">\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n            \n\n          </ion-avatar>\n\n          <h2>{{ user.first_name }} {{ user.last_name }}</h2>\n\n          <ion-note item-end></ion-note>\n\n        </ion-item>\n\n        <ion-item-options>\n\n          <button ion-button color="secondary" icon-only (click)="editUser(user._id)">\n\n            <ion-icon name="create"></ion-icon>\n\n          </button>\n\n          <button ion-button color="danger" icon-only (click)="removeUser(user._id)">\n\n            <ion-icon name="trash"></ion-icon>\n\n          </button>\n\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>`/*ion-inline-end:"C:\Users\SirManny\Documents\Jake\ionic\push-notif-mobile\src\pages\users\users-list\user-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */]])
    ], UserListPage);
    return UserListPage;
}());

//# sourceMappingURL=user-list.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(54);
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

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(54);
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
        this.api.Users.edit(this._id, this.first_name, this.last_name, this.mobile, this.email, this.username, this.password, this.is_active)
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */]) === "function" && _d || Object])
    ], UserEditPage);
    return UserEditPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=user-edit.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(354);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_users_users_add_user_add__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_users_users_list_user_list__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_users_users_edit_user_edit__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_api_service__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//pages





// shared

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
                __WEBPACK_IMPORTED_MODULE_11__pages_users_users_list_user_list__["a" /* UserListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_users_users_edit_user_edit__["a" /* UserEditPage */]
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
                __WEBPACK_IMPORTED_MODULE_11__pages_users_users_list_user_list__["a" /* UserListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_users_users_edit_user_edit__["a" /* UserEditPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__shared_api_service__["a" /* ApiService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(253);
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

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(401);
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
    }
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ApiService);
    return ApiService;
}());

//# sourceMappingURL=api.service.js.map

/***/ })

},[349]);
//# sourceMappingURL=main.js.map