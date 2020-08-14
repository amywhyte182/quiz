import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartScreenComponent } from './components/start-screen/start-screen.component';
import { BasicQuestionComponent } from './components/basic-question/basic-question.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { NewQuizComponent } from './components/new-quiz/new-quiz.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'start-screen' },
{ path: 'start-screen', component: StartScreenComponent },
{ path: 'basic-question', component: BasicQuestionComponent },
{ path: 'login-screen', component: LoginScreenComponent },
{ path: 'new-quiz', component: NewQuizComponent },
{ path: 'about-us', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
