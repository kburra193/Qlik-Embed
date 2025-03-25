// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // This method fetches the user's groups from the IDP using the OAuth token
  fetchUserGroups(accessToken: string): Observable<any> {
    const url = 'https://your-idp-endpoint/groups'; // Replace with your IDP's API endpoint
    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    return this.http.get<any>(url, { headers });
  }
}
