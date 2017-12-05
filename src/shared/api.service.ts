import { Injectable } from '@angular/core';
import { Http }  from '@angular/http';
import Config from '../shared/config';
import "rxjs/Rx"
@Injectable()
export class ApiService {
  constructor(private http :Http) { }
	Users = {
			login: (username: string,password : string) => {
	          return this.http.post(Config.baseUrl + "/users/login",
	          		 {
	          		  username : username,
	          		  password : password
	          		})
	                .map(response => {
	              	 return response.json();
	          }).toPromise();
	    	}
	 }
}