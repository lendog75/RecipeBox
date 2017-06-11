import { Component, Input, OnInit } from '@angular/core';
import { FavoriteService } from '../providers/favorite.service';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  @Input() recipeId: string;
  isActive: boolean;
  iconClass = 'none';
  private currentUser;

  constructor(private favoriteSvc: FavoriteService, private authSvc: AuthService) { }

  ngOnInit() {
    this.authSvc.authState.subscribe(user => {
      this.currentUser = user;
    });

    this.favoriteSvc.get(this.recipeId).subscribe(x => {
      if (x.chefId === this.currentUser.uid) {
        this.setIconClass(true);
      }
    });
  }

  setIconClass(isActive: boolean) {
    if (isActive) {
      this.iconClass = 'active';
    } else {
      this.iconClass = '';
    }
  }

  toggle() {
    this.isActive = !this.isActive;
    this.setIconClass(this.isActive);

    if (this.isActive) {

      this.favoriteSvc.add(this.recipeId, this.currentUser.uid);
    } else {
      this.favoriteSvc.remove(this.recipeId, this.currentUser.uid);
    }
  }
}
