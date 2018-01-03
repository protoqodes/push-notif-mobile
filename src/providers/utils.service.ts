import {Injectable} from "@angular/core";


@Injectable()
export class UtilService {


	static generateRandomToken(){

		let text: String = "";
	    let possible: String = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	    for(let i = 0; i < 5; i++) {
	        text += String(possible).charAt(Math.floor(Math.random() * possible.length));
	    }

	    return text;

	}

}