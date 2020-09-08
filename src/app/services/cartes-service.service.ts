import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import  Carte from '../models/Carte';
import { Observable } from 'rxjs';


const URL_BACKEND=environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class CartesServiceService {

  constructor(private http : HttpClient) { }

  ngOninit() : void {
    
  }

  getPaquetDeCartes():Observable<Carte[]>{
    return this.http.get<Carte[]>(`${URL_BACKEND}/getPaquetCarte`);
  }
  
}
