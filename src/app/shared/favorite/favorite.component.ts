import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  isActive: boolean;
  iconClass = 'none';

  constructor() { }

  ngOnInit() {
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
  }
}
