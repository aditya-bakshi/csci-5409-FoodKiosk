import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ASTWithName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class ReviewService {

  constructor(private http: HttpClient) {
 
   }

saveReview(reviewMsg: string, fileName: any ) : Observable<any>{
  const headers = new HttpHeaders().set('Content-Type','application/json');
 headers.set('Access-Control-Allow-Origin', '*');
  const orderDetails = {
    "reviewMsg": reviewMsg  
    }
  const body=JSON.stringify(orderDetails);
  return this.http.post("https://j7zksvxnyh.execute-api.us-east-2.amazonaws.com/saveReview", body,
  {headers: headers, params: { fileName: fileName}});

}

}
