import { Injectable } from '@angular/core';
import  Carte from '../models/Carte';
import  Prevision from '../models/Prevision';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL_BACKEND=environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class PrevisionsServiceService {

  constructor(private http : HttpClient) { }

  getPrevision(listeDeCartes : Carte[]):Observable<Prevision>{
    let urlCartes : string = "";
    listeDeCartes.forEach(carte => {
      if (carte.nomCarte !== "") {
        urlCartes= urlCartes + "/" + carte.nomCarte;
      }else{
        urlCartes= urlCartes + "/null";
      }
      
    });
    return this.http.get<Prevision>(`${URL_BACKEND}/getPrevision${urlCartes}`);
  }
}
