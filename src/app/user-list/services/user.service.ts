import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  getUserApi() {
    return this._http.get('./assets/files/user.json');
  }
}
