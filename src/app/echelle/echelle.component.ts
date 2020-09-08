import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ColorService} from '../services/color.service'
@Component({
  selector: 'app-echelle',
  templateUrl: './echelle.component.html',
  styleUrls: ['./echelle.component.scss']
})
export class EchelleComponent implements OnInit {

  constructor(public colorService :ColorService) { }
  ok = false;
  echelle : string[] = [];
  index = 0;
  ngOnInit(): void {
    this.colorService.getColorEchelle().subscribe((echelle) => {this.echelle = echelle;this.ok = true});
  }

}
