import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getData(source: string) {
    return this.http.get(source).pipe(
      tap((res: any) => res),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    return observableThrowError(error.error || 'Server error');
  }


  loginservice(formvalues){
    
    let options = {
          headers: new HttpHeaders({'Cache-Control': 'no-cache','Credentials': 'same-origin'}),
          withCredentials: true
    };
    return this.http.post('http://localhost:4000/login',formvalues,options);
    
  }

  signupservice(formvalues){

    return this.http.post('http://localhost:4000/register',formvalues);




  }


  addvendordetails(formvalues){
    return this.http.post('http://localhost:4000/vendordetails',formvalues);
  }

  getvendordetails(){
    return this.http.get('http://localhost:4000/getvendordetails');
  }


}
