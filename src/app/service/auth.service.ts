import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from '../models/new-user';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/user-login';
import { JwtDto } from '../models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) { }

  public newUser(newUser: NewUser): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'add-user', newUser);
  }

  public login(login: UserLogin): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', login);
  }
}
