import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-erreur',
  templateUrl: './popup-erreur.component.html',
  styleUrls: ['./popup-erreur.component.scss']
})
export class PopupErreurComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopupErreurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit(): void {
  }

}
