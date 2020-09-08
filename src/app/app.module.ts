import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PopupCartesComponent } from './accueil/popup/popup-cartes.component';
import { PopupErreurComponent } from './accueil/popup-erreur/popup-erreur.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { EchelleComponent } from './echelle/echelle.component';
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PopupCartesComponent,
    PopupErreurComponent,
    EchelleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule,
    FormsModule,
    MatCardModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTooltipModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
