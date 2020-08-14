import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-question',
  templateUrl: './basic-question.component.html',
  styleUrls: ['./basic-question.component.css']
})


export class BasicQuestionComponent implements OnInit {

	ourQuestion;
	currentQuestionNum = "1";
	newScore = new FormControl('');

	
	
	ngOnInit(): void {
	}

	constructor(private apiService: ApiService) {
		this.getQuestionByNum(this.currentQuestionNum);
	 }


	 addScoreToQuestion(newScoreName){
		 this.ourQuestion.score.push(newScoreName);
		 this.apiService.updateQuestionByNum(this.ourQuestion.num, this.ourQuestion).subscribe((data) => { })}
	 

 
	getQuestionByNum(num){ 
		this.apiService.getQuestionByNum(num).subscribe((data) => {
		this.ourQuestion = data[0];
		this.currentQuestionNum = this.ourQuestion.num;
		//console.log(this.ourRoom);
	})

  }

}
