import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  email = 'me@example.com';
  isActive = true;
  title = 'List of courses';
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
   }

  ngOnInit() {
  }

  onDivClicked() {
    console.log('Div was clicked.');
  }

  onSave($event ) {
    $event.stopPropagation();
    console.log('Button was clicked.', $event);
  }

  onKeyUp() {
    console.log(this.email);
  }
}
