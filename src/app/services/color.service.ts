import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL_BACKEND=environment.backendUrl;
@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private http : HttpClient) { }

  getColorEchelle():Observable<string[]>{
    return this.http.get<string[]>(`${URL_BACKEND}/echelle`);
  }
}
