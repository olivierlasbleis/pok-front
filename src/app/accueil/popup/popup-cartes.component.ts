import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog,  MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import Carte from '../../models/Carte';


export interface DialogData {
  index: number;
  listeCartes: Carte[];
}

@Component({
  selector: 'app-popup-cartes',
  templateUrl: './popup-cartes.component.html',
  styleUrls: ['./popup-cartes.component.scss']
})
export class PopupCartesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopupCartesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    cartesPique : Carte[] = [];
    cartesCarreau : Carte[] = [];
    cartesTrefle : Carte[] = [];
    cartesCoeur : Carte[] = [];
    carteVide = {nomCarte:"" , urlPhoto:"../assets/carteVide.gif"};
  onNoClick(): void {
    this.dialogRef.close() }

    ngOnInit(): void {
      this.cartesPique = this.data.listeCartes.filter(carte => carte.nomCarte.substring(carte.nomCarte.length-1,carte.nomCarte.length)=='s')
      this.cartesCarreau = this.data.listeCartes.filter(carte => carte.nomCarte.substring(carte.nomCarte.length-1,carte.nomCarte.length)=='d')
      this.cartesTrefle = this.data.listeCartes.filter(carte => carte.nomCarte.substring(carte.nomCarte.length-1,carte.nomCarte.length)=='c')
      this.cartesCoeur = this.data.listeCartes.filter(carte => carte.nomCarte.substring(carte.nomCarte.length-1,carte.nomCarte.length)=='h')
      
    }

    selectionCarte(carte : Carte):void{
      this.data.listeCartes=[];
      this.data.listeCartes.push(carte);
      this.dialogRef.close() 
    }
}


