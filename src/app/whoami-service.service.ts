import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WhoamiServiceService {

  constructor(private http: HttpClient) 
  {
    
  }
  getVisitors() : Observable<any>
  {
    return this.http.get('http://localhost:5000/visit');
  }

}
