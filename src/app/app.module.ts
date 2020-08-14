import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicQuestionComponent } from './components/basic-question/basic-question.component';
import { StartScreenComponent } from './components/start-screen/start-screen.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { NewQuizComponent } from './components/new-quiz/new-quiz.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicQuestionComponent,
    StartScreenComponent,
    LoginScreenComponent,
    NewQuizComponent,
    AboutUsComponent
  ],

  imports: [
    BrowserModule,
	ReactiveFormsModule,
    AppRoutingModule,
	HttpClientModule
  ],
  
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
