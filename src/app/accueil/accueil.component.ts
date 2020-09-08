import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog,  MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import Carte from '../models/Carte';
import {CartesServiceService} from '../services/cartes-service.service'
import {PrevisionsServiceService} from '../services/previsions-service.service'
import { PopupCartesComponent } from './popup/popup-cartes.component';
import Prevision from '../models/Prevision';
import { PopupErreurComponent } from './popup-erreur/popup-erreur.component';

export interface DialogData {
  index: number;
  listeCartes: Carte[];
}

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(public dialog: MatDialog, public carteService : CartesServiceService, public previsionService : PrevisionsServiceService) {}

  ngOnInit(): void {
    this.carteService.getPaquetDeCartes().subscribe((cartes) => {
      this.paquetDeCarteCourant = cartes;
    });
  }

  spinner : boolean = false;
  carte0 : Carte = {nomCarte:"" , urlPhoto:"../assets/carteVide.gif"};
  carte1 : Carte = {nomCarte:"" , urlPhoto:"../assets/carteVide.gif"};
  carte2 : Carte = {nomCarte:"" , urlPhoto:"../assets/carteVide.gif"};
  carte3 : Carte = {nomCarte:"" , urlPhoto:"../assets/carteVide.gif"};
  carte4 : Carte = {nomCarte:"" , urlPhoto:"../assets/carteVide.gif"};
  carte5 : Carte = {nomCarte:"" , urlPhoto:"../assets/carteVide.gif"};
  carte6 : Carte = {nomCarte:"" , urlPhoto:"../assets/carteVide.gif"};
  listeCartes : Carte[] = [
    this.carte0,
    this.carte1,
    this.carte2,
    this.carte3,
    this.carte4,
    this.carte5,
    this.carte6];
  paquetDeCarteCourant : Carte[] = [];
  prevision : Prevision;
  
  indexI : number = 0;
  indexJ : number = 0;

  test(){console.log("ok")}
  getPrevision() : void {
    if (this.listeCartes[0].nomCarte!== "" 
    && this.listeCartes[1].nomCarte!== ""
    && this.listeCartes[2].nomCarte!== ""
    && this.listeCartes[3].nomCarte!== ""
    && this.listeCartes[4].nomCarte!== "")  {
      if (this.listeCartes[6].nomCarte!== "" && this.listeCartes[5].nomCarte=== "") {
        this.openDialogErreur("Si vous sélectionnez une river, vous devez sélectionner une turn");
      } else {
        this.previsionService.getPrevision(this.listeCartes).subscribe((prevision) => {
          this.prevision=prevision;
          this.spinner = false;
        });
        this.spinner = true;
      }
    }else{
      this.openDialogErreur("Vous devez sélectionner une main plus un flop au minimum");
    }
    
  }

  openDialogErreur(messageErreur : string): void {
    const dialogRef = this.dialog.open(PopupErreurComponent, {
      width: '50%',
      data: messageErreur
    });
  }

  enleverCarte(carte : Carte){
    this.paquetDeCarteCourant = this.paquetDeCarteCourant.filter(c => c !== carte);
  }

  rajouterCarte(carte : Carte){
    this.paquetDeCarteCourant.push(carte)
  }

  openDialog(index : number): void {
    let carteCourante : Carte = this.listeCartes[index]
    const dialogRef = this.dialog.open(PopupCartesComponent, {
      
      data: {index:index,listeCartes : this.paquetDeCarteCourant}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.index == 0) {
        this.listeCartes[0] = result.listeCartes[0];
        this.carte0 = result.listeCartes[0];
      } else if (result.index == 1) {
        this.listeCartes[1] = result.listeCartes[0];
        this.carte1 = result.listeCartes[0];
      }else if (result.index == 2) {
        this.listeCartes[2] = result.listeCartes[0];
        this.carte2 = result.listeCartes[0];
      }else if (result.index == 3) {
        this.listeCartes[3] = result.listeCartes[0];
        this.carte3 = result.listeCartes[0];
      }else if (result.index == 4) {
        this.listeCartes[4] = result.listeCartes[0];
        this.carte4 = result.listeCartes[0];
      }else if (result.index == 5) {
        this.listeCartes[5] = result.listeCartes[0];
        this.carte5 = result.listeCartes[0];
      }else if (result.index == 6) {
        this.listeCartes[6] = result.listeCartes[0];
        this.carte6 = result.listeCartes[0];
      }
      this.enleverCarte(result.listeCartes[0])
      if(this.listeCartes[index].nomCarte !== ""){
        this.rajouterCarte(carteCourante);
      }
    });
  }

}


