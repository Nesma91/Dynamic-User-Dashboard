import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserData, UsersFullData } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(page: number) {
    return this.http.get<UsersFullData>(
      `https://reqres.in/api/users?page=${page}`
    );
  }

  getUsersWithNoSpecificPage() {
    return this.http.get<UsersFullData>(this.baseUrl);
  }

  getUser(id: number) {
    return this.http.get<UserData>(`${this.baseUrl}/${id}`);
  }
}
