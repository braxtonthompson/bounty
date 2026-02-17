import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthDataClient {
  private BASE_URL = "/api/auth";
  private http = inject(HttpClient);

  public login(): Observable<any> {
    return this.http.post(`${this.BASE_URL}/login`, {  })
  }
}
