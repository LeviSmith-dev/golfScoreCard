import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  course: any[];
  selected: any ;
  courseId: number = 49557;
  tee_types: any[];

  ngOnInit(): void {
    console.log('in OnInit');
    this.courseService.getCourses()
      .subscribe((courses: any) => {
        this.course = courses.courses;
        console.log(courses);
      })
  }

  getSingleCourse(courseId){
    console.log(courseId)
    this.courseService.getSelectedCourse(courseId)
      .subscribe((tees: any) => {
        this.tee_types =  tees.tee_types;
      })
  }


}
