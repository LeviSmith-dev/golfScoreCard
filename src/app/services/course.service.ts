import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable()
export class CourseService {
  private golfCourseUrl = 'https://golf-courses-api.herokuapp.com/courses';
  private url = 'https://golf-courses-api.herokuapp.com/courses'

  private header = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private body = {
    latitude: 40.396419,
    longitude: -111.9328359,
    radius: 100
  }

  constructor(private http: HttpClient){}

  getCourses(): Observable<any>{
    return this.http
      .post<any[]>(this.golfCourseUrl, this.body, this.header)
      .pipe(catchError(this.handleError));
  }

  handleError(error){
    console.log(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

  getSelectedCourse(courseId: number): Observable<any>{
    return this.http
      .get<any>(this.url + '/' + courseId)
      .pipe(catchError(this.handleError));
  }
}
