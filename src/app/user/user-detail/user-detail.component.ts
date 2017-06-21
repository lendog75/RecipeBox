import { Component, OnInit } from '@angular/core';
import { UserDetailService } from '../../shared/providers/user-detail.service';

@Component({
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  public userId: string;
  public favorites$: string;
  public myRecipes$: string;


  constructor(private userDetailSvc: UserDetailService) { }

  ngOnInit() {
    this.userId = this.userDetailSvc.currentUserId;

  this.favorites$ = `chefs/${this.userId}/favorites`;
  this.myRecipes$ = `chefs/${this.userId}/my-recipes`;
  }

}
