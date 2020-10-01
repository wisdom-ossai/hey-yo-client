import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { USER_ENDPOINTS } from '../../constants/api-endpoints/user.endpoints.constant';


const BASE_URL = 'http://localhost:3002';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get(`${BASE_URL}${USER_ENDPOINTS.getAll}`);
  }

  public getUser(): Observable<any> {
    return this.http.get(`${BASE_URL}${USER_ENDPOINTS.getById}`);
  }

  public getMyDetails(): Observable<any> {
    return this.http.get(`${BASE_URL}${USER_ENDPOINTS.getMyDetails}`);
  }

  public followUser(userId: string, isLiked: boolean): Observable<any> {
    if (isLiked) {
      return this.http.put(`${BASE_URL}${USER_ENDPOINTS.unfollowUser}/${userId}`, null);
    }
    return this.http.put(`${BASE_URL}${USER_ENDPOINTS.followUser}/${userId}`, null);
  }
}
