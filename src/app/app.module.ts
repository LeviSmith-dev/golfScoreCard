import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CourseService } from './services/course.service';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { ScoreCardComponent } from './score-card/score-card.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ScoreCardComponent,
    WelcomeComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    AngularFontAwesomeModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
