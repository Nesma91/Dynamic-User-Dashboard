import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { User, UserData } from '../models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user: UserData | null = null;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getUser(id);
    });
  }

  getUser(id: number) {
    this.apiService.getUser(id).subscribe((userData: UserData) => {
      this.user = userData;
    });
  }
}
