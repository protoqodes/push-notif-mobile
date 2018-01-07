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
	    	},
	    	add: (first_name: string,last_name : string,mobile : string, email: string, username : string , password: string, is_active : number) => {
              return this.http.post(Config.baseUrl + "/users/add",
                   {
                    first_name : first_name,
                    last_name : last_name,
                    mobile : mobile,
                    email: email,
                    username: username,
                    password: password,
                    is_active : is_active
                  })
                    .map(response => {
                     return response.json();
              }).toPromise();
          },
           list: () => {
          return this.http.get(Config.baseUrl + "/users/list")
                  .map(response => {
                   return response.json();
            }).toPromise();
          },
          view: (id: string) => {
              return this.http.get(Config.baseUrl + "/users/view/" + id)
                      .map(response => {
                       return response.json();
                }).toPromise();
          },
          edit: (user_id: string ,first_name: string,last_name : string,mobile : string, email: string, username : string , password: string) => {
                return this.http.post(Config.baseUrl + "/users/edit/"+ user_id,
                     {
                          first_name : first_name,
                          last_name : last_name,
                          mobile : mobile,
                          email: email,
                          username: username,
                          password: password
                    })
                      .map(response => {
                       return response.json();
                }).toPromise();
            },
          activate_user:(user_id: string) => {
                return this.http.post(Config.baseUrl + "/users/activated_user/"+ user_id,
                     {
                        user_id: user_id
                    })
                      .map(response => {
                       return response.json();
                }).toPromise();

          }


	 }

	  Posts = {
       list: () => {
             return this.http.get(Config.baseUrl + "/posts/list")
                   .map(response => {
                    return response.json();
             }).toPromise();
         }
    }
 
     Comments = {
       list: () => {
             return this.http.get(Config.baseUrl + "/comments/list")
                   .map(response => {
                    return response.json();
             }).toPromise();
        },
       add : (user_id : any , post_id : String, description : String) => {
               return this.http.post(Config.baseUrl + "/comments/add",
                    {
                     user_id : user_id,
                     post_id : post_id,
                     description : description
                   })
                    .map(response => {
                      return response.json();
               }).toPromise();
           },
    }

    MobileToken = {
       add : (generate_token : String, first_name: string,last_name : string,mobile : string, email: string, username : string , password: string, is_active : number) => {
               return this.http.post(Config.baseUrl + "/verify_token/add_user",
                    {
                     generate_token : generate_token,
                      first_name : first_name,
                      last_name : last_name,
                      mobile : mobile,
                      email: email,
                      username: username,
                      password: password,
                      is_active : is_active
                   })
                    .map(response => {
                      return response.json();
               }).toPromise();
           },
       activate_user:(user_id: string,generate_token : string) => {
                return this.http.post(Config.baseUrl + "/verify_token/activated_user/"+ user_id,
                     {
                        user_id: user_id,
                        generate_token: generate_token
                    })
                      .map(response => {
                       return response.json();
                }).toPromise();

          }


    }


}