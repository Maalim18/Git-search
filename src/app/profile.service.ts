import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


//  import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid:'Iv1.8cef7b2971eb1203';
  private clientsecret:' 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 '


constructor(private http: HttpClient) {
  console.log("service is now ready");
 }
ngOnInit(): void {
  throw new Error('Method not implemented.');
}

 getProfileInfo(username){
  interface apiUrl {
    login: string,
    avatar_url: string,
    blog:string,
    name:string,
    public_repos: number,
    followers: number,
    following: number,
    }
   return this.http.get<apiUrl>("https://api.github.com/users/" + username + "?client_id=" +
    this.clientid + "&client_secret=" + this.clientsecret);    
 }

 
 getProfileRepos(username){
  interface apiUrl {
    name: string,
    html_url: string,
    description:string
    }
  return this.http.get<apiUrl>("https://api.github.com/users/" + username + "/repos?client_id=" +
   this.clientid + "&client_secret=" + this.clientsecret);    
 }
}

