import { Component, Input, OnInit } from '@angular/core';
import { ViewsService } from '../providers/views.service';

@Component({
  selector: 'views-count',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {

  @Input() resourceId: string;
  public totalViews: number;

  constructor(private viewsService: ViewsService) { }

  ngOnInit() {
    this.viewsService.get(this.resourceId).subscribe(x => {
      if (x.$exists()) {
        this.totalViews = Object.keys(x).length;
      }
    });
  }

}
