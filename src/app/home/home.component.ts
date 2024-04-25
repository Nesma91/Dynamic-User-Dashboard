import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { User } from './../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  responsiveOptions;
  show: boolean = false;

  constructor(private apiService: ApiService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    setTimeout(() => {
      /** spinner ends after 500 ms */
      this.show = true;
      this.apiService.getUsersWithNoSpecificPage().subscribe(({ data }) => {
        this.users = data;
      });
    }, 500);
  }
}
