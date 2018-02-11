webpackJsonp([0],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_sidebar_sidebar__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__post_view_post_view_post__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__feedback_feedback__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(178);
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
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
            selector: 'page-home',template:/*ion-inline-start:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\home\home.html"*/`<!-- <ion-menu [content]="sidebar">\n\n  <ion-content padding>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>Push Notification</ion-label>\n\n        <ion-toggle [(ngModel)]="notification" color="secondary"></ion-toggle>\n\n      </ion-item>\n\n      <ion-item>\n\n        <a class="sidebar-link">Edit Profile</a>\n\n      </ion-item>\n\n      <ion-item>\n\n        <a class="sidebar-link" (click)="toFeedBack()" >Feedback</a>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav #sidebar></ion-nav> -->\n\n\n\n<navsidebar></navsidebar>\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Push notification for A.C\n\n    </ion-title>\n\n    <a (click)=\'logoutBtn()\' class="logout-btn">Logout</a>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding *ngIf="hasData">\n\n  <div class="holder">\n\n    <div class="container">\n\n      <div class="row">\n\n        <div class="col-12">\n\n          <div class="heading-holder">\n\n            <h4>RECENT POSTS</h4>\n\n          </div>\n\n\n\n          <button class="filter-btn" (click)=\'filterPost()\'>Filter</button>\n\n          <div class="filter-holder">\n\n            <input type="text" [(ngModel)]="title" placeholder="by title">\n\n            <input type="text" [(ngModel)]="description" placeholder="by description">\n\n          </div>\n\n          <ion-refresher (ionRefresh)="doRefresh($event)">\n\n            <ion-refresher-content\n\n              pullingIcon="arrow-dropdown"\n\n              pullingText="Pull to refresh"\n\n              refreshingSpinner="circles"\n\n              refreshingText="Refreshing...">\n\n            </ion-refresher-content>\n\n          </ion-refresher>\n\n\n\n          <br>\n\n          <!-- <button class="filter-btn" (click)="toFeedBack()" >Feedback</button> -->\n\n          <div class="post-holder" (click)=\'selectedPost(post)\' *ngFor="let post of posts">\n\n            <div class="post-header">\n\n              <img src="https://cdn.filestackcontent.com/VPkdgPyoT8KDCLJEk9Xn" alt="Angeles City Logo" />\n\n              <span>\n\n                <h6>{{post.title}}</h6>\n\n                <a href="#" class="date">@LungsodngAngeles  &bull; {{ post.created_at | date: format : timezone }}</a>\n\n              </span>\n\n            </div>\n\n            <img class="post-image" src="{{post.img}}" alt="" [hidden]="!post.img">\n\n            <p>\n\n              {{post.description}}\n\n            </p>\n\n            <!-- <ul>\n\n              <li><a href="#" class="date">{{ post.created_at | date: format : timezone }}</a></li>\n\n              <li><a href="#" class="website">www.angelescity.gov.ph</a></li>\n\n              <li><a href="#" class="social">@LungsodngAngeles</a></li>\n\n            </ul> -->\n\n             <form class="comment">\n\n               <div class="form-group">\n\n                 <input class="form-control" type="text" clearInput name="post-comment-{{ i }}" [(ngModel)]="post.field" placeholder="Add a comment">\n\n                 <!-- <input type="submit" value="POST" > -->\n\n               </div>\n\n               <button ion-button round (click)=\'postComment(post)\' class="btn btn-green">Send</button>\n\n             </form>\n\n            <!-- <ion-item class="comment-content" *ngFor="let comment of post.comment_docs">\n\n                <div>{{ comment.description }}</div>\n\n            </ion-item> -->\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n       <!-- <button ion-button (click)=\'logoutBtn()\'>Log out</button> -->\n\n</ion-content>\n\n`/*ion-inline-end:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\home\home.html"*/,
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

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feedback_thankyou_thankyou__ = __webpack_require__(431);
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
            selector: 'page-feedback',template:/*ion-inline-start:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\feedback\feedback.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Push notification for A.C\n\n    </ion-title>\n\n    <a (click)=\'logoutBtn()\' class="back-btn"><img src="https://cdn.filestackcontent.com/EBEl5OK0TKmGOOjWI1Kw"/></a>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<h4>Feedback</h4>\n\n	<form (ngSubmit)="feedbackForm()">\n\n	<ion-item>\n\n        <ion-label floating>Title</ion-label>\n\n        <ion-input type="text" [(ngModel)]="feedback.title" name="title"></ion-input>\n\n      </ion-item>\n\n		<ion-item>\n\n        <ion-label floating>Description</ion-label>\n\n        	<ion-textarea [(ngModel)]="feedback.description" name="description"></ion-textarea>\n\n      </ion-item>\n\n      <br>\n\n      <button ion-button type="submit" block>Send</button>\n\n	</form>\n\n</ion-content>\n\n`/*ion-inline-end:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\feedback\feedback.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers__["a" /* SocketService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */]) === "function" && _e || Object])
    ], FeedbackPage);
    return FeedbackPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(418);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_service__ = __webpack_require__(416);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__utils_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socket_service__ = __webpack_require__(811);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__socket_service__["a"]; });

// export * from './sql';
// export * from './database.service';
// export * from './model';


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_config__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_users_register_user_register__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_users_verify_token_verify_token__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_users_forgot_pass_forgot_pass__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(112);
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
            selector: 'page-home',template:/*ion-inline-start:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\login\login.html"*/`\n\n<ion-content padding>\n\n  <div class="login-holder">\n\n    <div class="logo-holder">\n\n      <img class="ac-logo" src="https://cdn.filestackcontent.com/VPkdgPyoT8KDCLJEk9Xn">\n\n    </div>\n\n\n\n    <form class="form-login">\n\n      <label><input type="email" name="username" placeholder="Email or Mobile number" [(ngModel)]="posts.username" /></label>\n\n      <label><input type="password" name="password" placeholder="Password" [(ngModel)]="posts.password" /></label>\n\n      <button class="btn-green" type="submit" (click)="logMeIn()">Log In</button>\n\n    </form>\n\n    <a class="description forgot-pass" (click)="goReset()">Forgot your password?</a>\n\n    <br/><br/>\n\n    <a class="description forgot-pass" (click)="goRegister()">Register</a>\n\n  </div>\n\n</ion-content>\n\n`/*ion-inline-end:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\login\login.html"*/
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

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyTokenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(112);
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
                console.log(verify_token);
                _this.storage.set('user', _this.user);
                _this.storage.set('is_notify', _this.user.user.is_notify);
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

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_storage__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_filestack_js__ = __webpack_require__(864);
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
                _this.image = user.user.img;
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
        filestack.pick().then(function (image) {
            var image = image.filesUploaded[0].url;
            _this.api.Users.image(_this._id, image).then(function (user) {
                _this.storage.set('user', user);
            });
        });
        //setup camera options
        /*const cameraOptions: CameraOptions = {
          quality: 50,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(cameraOptions).then((imageData) => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64:
          this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
          // Handle error
        });*/
    };
    UserEditPage.prototype.upload = function () {
        /* const filename = Math.floor(Date.now() / 1000);
          
          const asd = this.afStorage.ref(`users/${filename}.jpg`)
          .putString(this.captureDataUrl,'data_url')
          .then((snapshot)=>{
           this.image = snapshot.metadata.downloadURLs[0];
           filestack.storeURL(snapshot.metadata.downloadURLs[0]).then(res => {
             this.api.Users.image(this._id,res.url).then(user =>{
                 this.storage.set('user', user);
             })
           });
          })
          .catch((err)=>{
          alert(err);
          }) */
    };
    UserEditPage.prototype.updateUser = function () {
        var _this = this;
        //   this.is_active = 0;
        this.api.Users.edit(this._id, this.first_name, this.last_name, this.mobile, this.email, this.username, this.password, this.path, this.img_name)
            .then(function (user) {
            _this.api.Users.view(_this._id).then(function (user) {
                var user = {
                    user: user
                };
                _this.storage.set('user', user);
            });
        });
        this.navCtrl.pop();
    };
    UserEditPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    UserEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-edit',template:/*ion-inline-start:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\users\users-edit\user-edit.html"*/`<ion-header>\n\n  <ion-navbar color="main">\n\n    <ion-title text-center>\n\n\n\n      <button ion-button (click)=\'updateUser()\'>Save</button>\n\n    </ion-title>\n\n    <ion-buttons end>\n\n    <a (click)=\'goBack()\' class="back-btn"><img src="https://cdn.filestackcontent.com/EBEl5OK0TKmGOOjWI1Kw"/></a>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-item text-center class="photo-holder">\n\n    <div class="editPhoto">\n\n    <button ion-button (click)="capture()">Profile Picture</button>\n\n    </div><br>\n\n      <img [src]="image" *ngIf="image" class="profile-img"/>\n\n      <br>\n\n      <!--<button ion-button (click)="upload()">Upload</button>-->\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="main" floating>First Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="first_name" text-left></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="main" floating>Last Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="last_name" text-left></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="main" floating>Phone</ion-label>\n\n      <ion-input type="text" [(ngModel)]="mobile" text-left></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n      <ion-label color="main" floating>Email</ion-label>\n\n      <ion-input type="email" [(ngModel)]="email" text-left></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n      <ion-label color="main" floating>Username</ion-label>\n\n      <ion-input type="text" [(ngModel)]="username" text-left></ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n      <ion-label color="main" floating>Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="password" text-left></ion-input>\n\n    </ion-item>\n\n\n\n\n\n  </ion-row>\n\n</ion-content>\n\n`/*ion-inline-end:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\users\users-edit\user-edit.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_9_angularfire2_storage__["a" /* AngularFireStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_angularfire2_storage__["a" /* AngularFireStorage */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64__["a" /* Base64 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64__["a" /* Base64 */]) === "function" && _l || Object])
    ], UserEditPage);
    return UserEditPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=user-edit.js.map

/***/ }),

/***/ 228:
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
webpackEmptyAsyncContext.id = 228;

/***/ }),

/***/ 273:
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
webpackEmptyAsyncContext.id = 273;

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(544);
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
                    is_verify: '0',
                    is_notify: true
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
            image: function (user_id, image) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/users/image/" + user_id, {
                    img: image
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
            add: function (user_id, post_id, description, fullname, img) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* default */].baseUrl + "/comments/add", {
                    user_id: user_id,
                    post_id: post_id,
                    description: description,
                    fullname: fullname,
                    img: img
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
                    is_active: is_active,
                    is_notify: true
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

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var config = {
    // baseUrl : 'http://localhost:5016/api',
    baseUrl: 'https://angeles-notif.herokuapp.com/api'
};
/* harmony default export */ __webpack_exports__["a"] = (config);
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_service__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_users_verify_token_verify_token__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(36);
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
            // this.api.Users.add(this.first_name.value,this.last_name.value,this.mobile.value,this.email.value,this.username.value,this.password.value,this.is_active)
            //   .then(post =>{
            //       console.log(post);
            //       if(post){
            var generateToken = __WEBPACK_IMPORTED_MODULE_4__providers_utils_service__["a" /* UtilService */].generateRandomToken();
            this.api.MobileToken.add(generateToken, this.first_name.value, this.last_name.value, this.mobile.value, this.email.value, this.username.value, this.password.value, this.is_active).then(function (mobile_token) {
                console.log(mobile_token);
                if (mobile_token.user) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_users_verify_token_verify_token__["a" /* VerifyTokenPage */], { user_id: mobile_token.user._id, user: mobile_token }, {
                        animate: true,
                        direction: 'forward'
                    });
                }
            }).catch(function (error) {
                _this.existUser = true;
                return;
            });
            // }
            console.log('added');
            //     }).catch(error => {
            // });
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

/***/ 416:
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

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarNav; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_feedback_feedback__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_users_users_edit_user_edit__ = __webpack_require__(203);
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

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SOCKET_HOST; });
var SOCKET_HOST = "http://localhost:3000";
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackThankYouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(112);
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
            selector: 'page-thank-you',template:/*ion-inline-start:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\feedback_thankyou\thankyou.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Push notification for A.C\n\n    </ion-title>\n\n    <a (click)=\'logoutBtn()\' class="back-btn">Logout</a>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<h4>Thank you!</h4>\n\n	<div *ngIf="is_verify == \'1\';else verify">\n\n    <p>We will read your feedback shortly</p>\n\n  </div>\n\n    <ng-template #verify>We have received your feedback. Please verify your email first. Thank you!</ng-template>\n\n    <br>\n\n  <div class="button-holder">\n\n  <button ion-button (click)="backToPost()">Back to post</button>\n\n  </div>\n\n</ion-content>\n\n`/*ion-inline-end:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\feedback_thankyou\thankyou.html"*/
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

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(28);
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
    function PostViewPage(navCtrl, navParamsCtrl, toastCtrl, storage, api) {
        this.navCtrl = navCtrl;
        this.navParamsCtrl = navParamsCtrl;
        this.toastCtrl = toastCtrl;
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
            console.log(_this.comment_docs);
        });
        this.storage.get('user').then(function (user) {
            _this.user_id = user.user._id;
            _this.fullname = user.user.first_name + ' ' + user.user.last_name;
            _this.image_user = user.user.img;
        });
        console.log(this);
    };
    PostViewPage.prototype.postComment = function () {
        var _this = this;
        console.log(this);
        if (this.save_post.description == '' || Object.keys(this.save_post).length < 1 || this.save_post.description === ' ') {
            var toast = this.toastCtrl.create({
                message: "Please add a comment",
                duration: 2000
            });
            toast.present();
            return;
        }
        this.api.Comments.add(this.user_id, this._id, this.save_post.description, this.fullname, this.image_user)
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
            selector: 'view-post',template:/*ion-inline-start:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\post\view-post\view-post.html"*/`\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Push notification for A.C\n\n    </ion-title>\n\n    <a (click)=\'goBack()\' class="back-btn"><img src="https://cdn.filestackcontent.com/EBEl5OK0TKmGOOjWI1Kw"/></a>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="post-holder">\n\n    <div class="post-header">\n\n      <img src="https://cdn.filestackcontent.com/VPkdgPyoT8KDCLJEk9Xn" alt="Angeles City Logo" />\n\n      <span>\n\n        <h6>{{title}}</h6>\n\n        <a href="#" class="date">@LungsodngAngeles  &bull; {{ created_at | date: format : timezone }}</a>\n\n      </span>\n\n    </div>\n\n    <p>\n\n      {{description}}\n\n    </p>\n\n    <img class="post-image" src="{{img}}" alt="" [hidden]="!img">\n\n    <ion-item class="comment-content" *ngFor="let comment of comment_docs">\n\n      <div class="comment-header">\n\n        <img src="{{ comment.img }}" class="comment-img">\n\n        <span>\n\n          <span class="name">{{comment.fullname}}</span>\n\n          <br>\n\n          <span class="date">{{ comment.created_at | date: format : timezone }}</span>\n\n        </span>\n\n      </div>\n\n\n\n      <p class="content">{{ comment.description }}</p>\n\n    </ion-item>\n\n    <ion-item class="comment-field">\n\n       <form class="comment" (ngSubmit)="postComment()">\n\n         <div class="form-group">\n\n           <input class="form-control" type="text" clearInput name="post-comment" [(ngModel)]="save_post.description" placeholder="Write a comment">\n\n           <!-- <input type="submit" value="POST" > -->\n\n         </div>\n\n         <button class="btn btn-green">Send</button>\n\n       </form>\n\n    </ion-item>\n\n  </div>\n\n</ion-content>\n\n`/*ion-inline-end:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\post\view-post\view-post.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__shared_api_service__["a" /* ApiService */]])
    ], PostViewPage);
    return PostViewPage;
}());

//# sourceMappingURL=view-post.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(28);
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

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(28);
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

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(497);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_path__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_users_users_add_user_add__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_users_register_user_register__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_users_register_thanks_register_thanks__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_users_users_list_user_list__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_users_users_edit_user_edit__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_users_verify_token_verify_token__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_post_view_post_view_post__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_users_forgot_pass_forgot_pass__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_feedback_feedback__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_feedback_thankyou_thankyou__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2_database__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2_storage__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__shared_sidebar_sidebar__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_base64__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers__ = __webpack_require__(114);
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
                __WEBPACK_IMPORTED_MODULE_28__shared_sidebar_sidebar__["a" /* SidebarNav */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_users_users_add_user_add__["a" /* UserAddPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_users_users_list_user_list__["a" /* UserListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_users_users_edit_user_edit__["a" /* UserEditPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_users_register_user_register__["a" /* UserRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_users_register_thanks_register_thanks__["a" /* RegisterThanks */],
                __WEBPACK_IMPORTED_MODULE_19__pages_users_verify_token_verify_token__["a" /* VerifyTokenPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_post_view_post_view_post__["a" /* PostViewPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_users_verify_token_verify_token__["a" /* VerifyTokenPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_users_forgot_pass_forgot_pass__["a" /* ForgotPassPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_feedback_thankyou_thankyou__["a" /* FeedbackThankYouPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_24_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_25_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_26_angularfire2_storage__["b" /* AngularFireStorageModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_28__shared_sidebar_sidebar__["a" /* SidebarNav */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_users_users_add_user_add__["a" /* UserAddPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_users_users_list_user_list__["a" /* UserListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_users_users_edit_user_edit__["a" /* UserEditPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_users_register_user_register__["a" /* UserRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_users_register_thanks_register_thanks__["a" /* RegisterThanks */],
                __WEBPACK_IMPORTED_MODULE_19__pages_users_verify_token_verify_token__["a" /* VerifyTokenPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_post_view_post_view_post__["a" /* PostViewPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_users_verify_token_verify_token__["a" /* VerifyTokenPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_users_forgot_pass_forgot_pass__["a" /* ForgotPassPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_feedback_thankyou_thankyou__["a" /* FeedbackThankYouPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_27__shared_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_30__providers__["b" /* UtilService */],
                __WEBPACK_IMPORTED_MODULE_30__providers__["a" /* SocketService */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_base64__["a" /* Base64 */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_feedback_feedback__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(26);
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
            var firebaseConfig = {
                apiKey: "AIzaSyBH_hBgUME25UVzGYE7sani2eYrgGiyh4M",
                authDomain: "test-6148c.firebaseapp.com",
                databaseURL: "https://test-6148c.firebaseio.com",
                projectId: "test-6148c",
                storageBucket: "test-6148c.appspot.com",
                messagingSenderId: "469373891917"
            };
            __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.initializeApp(firebaseConfig);
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
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(418);
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

/***/ 830:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterThanks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { HomePage } from '../../../pages/home/home';
var RegisterThanks = (function () {
    function RegisterThanks() {
    }
    RegisterThanks = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'register-thanks',template:/*ion-inline-start:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\users\register-thanks\register-thanks.html"*/`<ion-header>\n\n  <ion-navbar color="main">\n\n    <ion-title text-center>\n\n     Thank you\n\n    </ion-title>\n\n    <a (click)=\'goBack()\' class="back-btn"><img src="https://cdn.filestackcontent.com/EBEl5OK0TKmGOOjWI1Kw"/></a>\n\n    <!-- <ion-buttons end>\n\n      <button ion-button (click)=\'addUser()\'>Add</button>\n\n    </ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p>Thanks for registering!</p>\n\n</ion-content>\n\n`/*ion-inline-end:"G:\projects\push-notif-folder\push-notif-mobile\src\pages\users\register-thanks\register-thanks.html"*/
        })
    ], RegisterThanks);
    return RegisterThanks;
}());

//# sourceMappingURL=register-thanks.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_add_user_add__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_edit_user_edit__ = __webpack_require__(203);
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

/***/ })

},[492]);
//# sourceMappingURL=main.js.map