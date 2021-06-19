import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Agent } from 'src/app/shared/models/agent';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  constructor(private httpClient: HttpClient) {}

  authentificate(username, password) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });
    return this.httpClient
      .get<Agent>('http://localhost:8080/agents/search/up3?u='+username+'&p='+password, {
        headers,
      })
      .pipe(
        map((userData) => {
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('name', userData.nom);
          //sessionStorage.setItem('agency', userData.agence.toString());
          this.getIdAgence(username,password).subscribe(id=>{
            console.log(id)
          },err=>{
            console.log(err)
          })
      
          sessionStorage.setItem('currentAgentId', userData.id.toString());
          let authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          
          return userData;
        })
      );
  }
  getIdAgence(user:string,pass:string){
    return this.httpClient.get("http://localhost:8080/agents/search/up?u="+user+"&p="+pass).pipe(
      map((data) => {
        sessionStorage.setItem('agency', data.toString());
        return data;
      }))
    }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('agency');
    sessionStorage.removeItem('currentAgentId');
    sessionStorage.removeItem('basicauth');
  }
}
