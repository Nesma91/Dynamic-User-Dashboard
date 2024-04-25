import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData, UsersFullData } from '../models/user';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsersWithNoSpecificPage() {
    return this.http.get<UsersFullData>(this.baseUrl);
  }

  getUser(id: number) {
    return this.http.get<UserData>(`${this.baseUrl}/${id}`);
  }

  searchUsers(page: number) {
    return this.http.get<UsersFullData>(`${this.baseUrl}?page=${page}`).pipe(
      switchMap((res) => {
        return of(res.data);
      })
    );
  }
}
