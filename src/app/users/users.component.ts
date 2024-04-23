import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getUsersWithNoSpecificPage().subscribe((res) => {
      this.users = res.data;
    });
  }
}
