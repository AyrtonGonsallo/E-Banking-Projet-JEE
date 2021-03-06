import { Injectable } from '@angular/core';
import { Agent } from '../model/agent';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AgentService {
  private agentUrl: string;
  constructor(private http: HttpClient) {
    this.agentUrl = 'http://localhost:8080/agent';
  }
  /* public findAll(): Observable<Agent[]> {
    return this.http.get<Agent[]>(this.agentUrl);
  } */
  public findAllAgents(id: string): Observable<any> {
    let username = 'admin';
    let password = 'admin';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });
    return this.http.get<Agent[]>(
      'http://localhost:8080/agence/' + id + '/agents'
    );
  }

  public save(agent: Agent) {
    let username = 'admin';
    let password = 'admin';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });
    return this.http.post<Agent>(this.agentUrl + 's/save', agent);
  }
  delete(id: number): Observable<any> {
    let username = 'admin';
    let password = 'admin';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });
    return this.http.delete(`${this.agentUrl}/${id}`);
  }
  public update(id: string, agent: Agent): Observable<any> {
    let username = 'admin';
    let password = 'admin';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });
    return this.http.put(`${this.agentUrl}/${id}`, agent);
  }

  public findAgent(id: string): Observable<Agent[]> {
    let username = 'admin';
    let password = 'admin';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });
    return this.http.get<Agent[]>(this.agentUrl + 's?id=' + id);
  }
}
