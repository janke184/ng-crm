import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient
  ) { }

  getBaseURL()
  {
    return 'http://localhost:3000/api';
  }

  getConnectedUser() {
    return this.r(
      this.getBaseURL() + '/getconnecteduser',
      {}
    )
  }
  
  signin(username: string, password: string) {
		return this.r(
      this.getBaseURL() + '/signin',
      {
        username: username,
        password: password
      })
  }

  r(path: string, input: any): Observable<any> {

		console.log('Request');
		console.log(input);

		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})  
      , withCredentials: true
			, reportProgress: true
		};

		return this.http.post<any>(path, input, httpOptions).pipe(
			map( (val) => {
        console.log('Response' ,val);
				return val;
			})
		);

	}

  
}
