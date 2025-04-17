import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl;

  private tokenKey = 'authToken';
  private _userIsAuthenticated = false;

  get userIsAuthenticated(): boolean {
    return this._userIsAuthenticated;
  }

  get token(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  constructor(private http: HttpClient) {
    if (localStorage.getItem(this.tokenKey)) {
      this._userIsAuthenticated = true;
    }
  }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.baseUrl}/Authentication/login`, body).pipe(
      tap((response: any) => {
        if (response && response.token) {
          localStorage.setItem(this.tokenKey, response.token);
          this._userIsAuthenticated = true;
        }
      })
    );
  }

  // دالة تسجيل الخروج: تقوم بحذف التوكن وتغيير حالة المستخدم
  logout(): void {
    this._userIsAuthenticated = false;
    localStorage.removeItem(this.tokenKey);
  }

  // دالة التسجيل كما هي دون تغيير
  register(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Authentication/register`, userData);
  }
}
