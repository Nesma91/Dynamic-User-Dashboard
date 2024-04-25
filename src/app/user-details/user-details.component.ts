import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UserData } from '../models/user';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user: UserData | null = null;

  show: boolean = false;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    setTimeout(() => {
      /** spinner ends after 500 ms */
      this.show = true;

      this.route.params.pipe(first()).subscribe(({ id }) => {
        this.getUser(id);
      });
    }, 500);
  }

  getUser(id: number) {
    this.apiService.getUser(id).subscribe((userData: UserData) => {
      this.user = userData;
    });
  }
}
