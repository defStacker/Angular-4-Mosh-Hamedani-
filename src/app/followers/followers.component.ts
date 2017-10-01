import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { FollowersService } from './../services/followers.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: FollowersService) { }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .switchMap(combined => {
      const id = combined[0].get('id');
      const page = combined[1].get('page');

      return this.service.getAll();
      // .subscribe(followers => this.followers = followers);
      // this.service.getAll({ id: id, page: page });
    })
    .subscribe(followers => this.followers = followers);

    // this.route.paramMap.subscribe();
    // const id = this.route.snapshot.paramMap.get('id');

    // this.route.queryParamMap.subscribe();
    // const page = this.route.snapshot.queryParamMap.get('page');

  }
}
