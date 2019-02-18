import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {apiEndpoint} from '../environments/environment'; 
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {}
    
    public get$(location: string): Observable<Object> {
        return this.http.get(apiEndpoint + location);
    }
}
