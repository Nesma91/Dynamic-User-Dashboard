import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  searchValue: number | null = null;
  show: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      /** spinner ends after 500 ms */
      this.show = true;
      this.getPagedUsers(1);
    }, 500);
  }

  getPagedUsers(page: number) {
    this.apiService.searchUsers(page).subscribe((res) => {
      this.users = res;
    });
  }

  paginate(event: any) {
    this.getPagedUsers(event.page + 1);
  }

  searchChanged() {
    this.getPagedUsers(1);
    if (this.searchValue) {
      if (
        this.searchValue <= 0 ||
        this.searchValue == 0 ||
        this.searchValue > 12
      ) {
        this.router.navigate(['/nouser']);
      }
      this.apiService.getUser(this.searchValue).subscribe(({ data }) => {
        let idValue = data.id;
        this.router.navigate([`/users/details/${idValue}`]);
      });
    }
  }
}
