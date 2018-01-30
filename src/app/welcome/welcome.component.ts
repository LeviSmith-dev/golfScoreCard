import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  $: any;
  course: any;
  selected: any;
  tee_types: any;
  golfCourse: any;
  players: number = 4;
  player: string;
  tee_type: string;

  ngOnInit(): void {
    console.log('in OnInit');
    this.courseService.getCourses()
      .subscribe((courses: any) => {
        this.course = courses.courses;
        console.log(courses);
      })
  }

  getSingleCourse(){
    console.log(this.selected)
    this.courseService.getSelectedCourse(this.selected)
      .subscribe((golfCourse: any) => {
        this.golfCourse =  golfCourse.course;
        this.tee_types = golfCourse.course.tee_types;
        console.log(this.golfCourse);
        console.log(this.tee_types);
      })
  }

  addPlayer(){
    $('.players').append("<input class='player'><button class='add' [value]='player' (click)=''>add player</button>");
    console.log(this.player);
  }

  buildCard(){

  }


}
