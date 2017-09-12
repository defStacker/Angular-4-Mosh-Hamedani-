import { LikeChangedEventArgs } from './like/like.component';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  viewMode = 'map';
  courses: number[] = [1];
  title = 'app';

  post = {
    title: 'Title',
    isFavourite: true,
    likeCount: 7,
    likeSelected: true
  };

  onFavouriteChanged(eventArgs: FavouriteChangedEventArgs) {
    console.log('FavouriteChanged', eventArgs);
  }

  onLikeChanged(eventArgs: LikeChangedEventArgs) {
    console.log('LikeChenged', eventArgs);
  }
}
