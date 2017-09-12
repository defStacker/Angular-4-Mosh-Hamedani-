import { LikeChangedEventArgs } from './like/like.component';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  canSave = false;
  viewMode = 'map';
  courses = [];
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

  onAdd() {
    this.courses.push({id: 4, name: 'course4'});
  }

  onRemove(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onUpdate(course) {
    course.name = 'Updated!';
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1'},
      { id: 2, name: 'course2'},
      { id: 3, name: 'course3'},
    ];
  }

  trackCourse(intdex, course) {
    return course ? course.id : undefined;
  }
}
