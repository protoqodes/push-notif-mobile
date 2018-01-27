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
                    is_active : is_active,
                    permission: '0',
                    is_verify : '0'
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
          password_reset : (email : string) => {
            return this.http.post(Config.baseUrl + "/users/reset",{
                    email : email
                  })
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

          },
          notify:(is_notify : boolean ,user_id: string) => {
                return this.http.post(Config.baseUrl + "/users/notify/"+ user_id,
                     {
                        is_notify: is_notify
                    })
                      .map(response => {
                       return response.json();
                }).toPromise();

          }


	 }

	  Posts = {

       list: (page: string, pageSize: string , title: string ,description : string ,date_filter: string) => {
             return this.http.post(Config.baseUrl + "/posts/list",
             {
                page: page,
                pageSize : pageSize,
                title: title,
                description : description,
                date_filter : date_filter
             })
              .map(response => {
                    return response.json();
             }).toPromise();
         },
         view: (post_id : string) => {
          return this.http.get(Config.baseUrl + "/posts/view/" + post_id)
                  .map(response => {
                   return response.json();
            }).toPromise();
        },
    }
 
     Comments = {
       list: () => {
             return this.http.get(Config.baseUrl + "/comments/list")
                   .map(response => {
                    return response.json();
             }).toPromise();
        },
       add : (user_id : any , post_id : String, description : String, fullname : String, img_comment: String) => {
               return this.http.post(Config.baseUrl + "/comments/add",
                    {
                     user_id : user_id,
                     post_id : post_id,
                     description : description,
                     fullname : fullname,
                     img_comment : img_comment
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
    Feedback = {
      add:(title : string,description : string,user_id : string,is_verify : string, email : string) => {
                return this.http.post(Config.baseUrl + "/feedback/add",
                     {
                        user_id: user_id,
                        title: title,
                        description : description,
                        is_verify : is_verify,
                        email : email
                    })
                      .map(response => {
                       return response.json();
                }).toPromise();

          }
    }


}