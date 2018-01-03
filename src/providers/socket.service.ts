import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import * as io from "socket.io-client";
import {SOCKET_HOST} from "./constants";
// import {UtilService} from "./util.service";
// import {DatabaseService} from "./database.service";
import Socket = SocketIOClient.Socket;

@Injectable()
export class SocketService {
  // public messages: Observable<ChatMessage>;
  // public notify :  Observable<ChatNotification>;
  // public popup : Observable<DealMessage>;
  private socketObserver: any;
  private socketObserverNotify: any;
  private socketObserverPopUp: any;

  private socket: Socket;

  constructor(){

  	// this.messages = Observable.create(observer => {
   //    this.socketObserver = observer;
   //  });

   //  this.notify = Observable.create(observerNotify => {
   //    this.socketObserverNotify = observerNotify;
   //  });   

   //  this.popup = Observable.create(observerPopup => {
   //    this.socketObserverPopUp = observerPopup;
   //  });

   //  this.init();

  }

  init() {
    this.socket = io(SOCKET_HOST, {autoConnect: true});

    this.socket.on("connect", () => {
      console.log('***Socket Connected***');
    });

    this.socket.on("reconnecting", attempt => {
      console.log('***Socket Reconnecting***', attempt);
    });

    this.socket.on("reconnect_failed", () => {
      console.log('***Socket Reconnect failed***');
    });

    this.socket.on('disconnect', () => {
      console.log('***Socket Disconnected***');
    });

    // Get Message Response
    this.socket.on('message', response => {

      // let chatMessage: ChatMessage = response;

      console.log(response);
      // chatMessage.epoch = UtilService.getEpoch();
      // this.socketObserver.next(chatMessage);
    });


    // Real time notification
    this.socket.on('notify', response => {

      // let chatNofitication: ChatNotification = response;

      console.log(response);
      // this.socketObserverNotify.next(chatNofitication);
    });

   // Real time popup response
   this.socket.on('popup', response => {
      // let popUp: DealMessage = response
      console.log(response)

      // this.socketObserverPopUp.next(popUp);
    });

  }

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

  disconnect() {
    this.socket.disconnect();
  }

  connect() {
    this.socket.connect();
  }

  // joinRoom(room_id){
  //   this.socket.emit('joinroom',room_id);
  // }

}