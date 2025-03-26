import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IThProfile, IUserData } from '../models/userDetails';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PortfolioData } from '../models/secondPortfolioDetails';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  currentUserData = new BehaviorSubject<IUserData>({});
  thirdPortfolioData = new BehaviorSubject<IThProfile>({});
  secondPortfolioData = new BehaviorSubject<PortfolioData>({});
  templateName = new BehaviorSubject<string>('first');
  userName = new BehaviorSubject<string>('buddy');
  private apiUrl = 'https://api.github.com/users/fejinfm2000/gists';
  // private githubAccessToken = environment.githubAccessToken;
  constructor(private http: HttpClient) { }

  // Fetch all gists for a user
  // getGists(): Observable<any> {
  //   const headers = new HttpHeaders({
  //     Authorization: `token ${this.githubAccessToken}`,
  //   });
  //   console.log(headers);
  //   console.log(this.githubAccessToken);

  //   return this.http.get(this.apiUrl, { headers });
  // }

  // Fetch the content of a specific Gist file
  // getGistFile(gistId: string, filename: string): Observable<string> {
  getGistFile(): Observable<string> {
    // const rawUrl = `https://gist.githubusercontent.com/fejinfm2000/${gistId}/raw/${filename}`;
    const rawUrl = `https://gist.githubusercontent.com/fejinfm2000/82d1f8b4f857460e85dabfb842327c5d/raw/31568ad4a018ad58ccda261fe6225d3faf567e64/portfoliolist.json`;
    return this.http.get(rawUrl, { responseType: 'text' });
  }
  getSecondGistFile() {
    const rawUrl = `https://gist.githubusercontent.com/fejinfm2000/d257532ddf3f1ee096a178775411c506/raw/cb10cfc335f449288d69c396d84157ebf8acb5dd/SecondPortfoliolist.json`;
    return this.http.get(rawUrl, { responseType: 'text' });
  }
  getThirdGistFile() {
    const rawUrl = `https://gist.githubusercontent.com/fejinfm2000/888c19bdcb0fbee4e5a01cd3b35dbde1/raw/147368ffddc2304879dbc783a0a56eefbd62693a/thirdPortfolioList.json`;
    return this.http.get(rawUrl, { responseType: 'text' });
  }
}
