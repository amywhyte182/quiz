import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
	baseUri:string = '/api';
	headers = new HttpHeaders().set('Content-Type', 'application/json');

  	constructor(private http: HttpClient) { }
  
  // Get all questions
  getQuestions() {
	  return this.http.get(`${this.baseUri}`);
	  }
	  
	//Get question
	getQuestion(id): Observable<any> {
		let url = `${this.baseUri}/read/${id}`;
		return this.http.get(url, {headers: this.headers}).pipe(
		map((res: Response) => {
			return res || {}
		}),
		catchError(this.errorMgmt)
		)
		}
		
		getQuestionByNum(num): Observable<any> {
			let url = `${this.baseUri}/num/${num}`;
			return this.http.get(url, {headers: this.headers}).pipe(
			map((res: Response) => {
				return res || {}
				}),
				catchError(this.errorMgmt)
				)
				}
		
		
		  // Update room
  updateQuestion(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  updateQuestionByNum(num, data): Observable<any> {
    let url = `${this.baseUri}/updatebynum/${num}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
			
	// Error handling
	errorMgmt(error: HttpErrorResponse) {
		let errorMessage = '';
		if (error.error instanceof ErrorEvent) {
			// Get client-side error
			errorMessage = error.error.message;
			} else {
				// Get server-side error
				errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
				}
				console.log(errorMessage);
				return throwError(errorMessage);
	}
		
		
}
