import { Component, OnInit, Input } from '@angular/core';
import { User, UserData } from '../models/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent implements OnInit {
  @Input() item!: User;
  constructor() {}

  ngOnInit(): void {}
}
