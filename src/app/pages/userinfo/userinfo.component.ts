import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';   // ✅ pour *ngIf
import { UserService } from './user.service';

@Component({
  selector: 'app-userinfo',
  standalone: true,
  imports: [CommonModule],     // ✅ autorise les directives Angular comme *ngIf
  templateUrl: './userinfo.component.html'
})
export class UserinfoComponent implements OnInit {
  user: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }
}
