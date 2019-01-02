import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AirInfo } from '../models/air-info.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AirListApi {

  constructor(private http: HttpClient) {
  }

  query(): Observable<AirInfo[]> {
    return this.http.get<AirInfo[]>('/api/airList');
  }
}
