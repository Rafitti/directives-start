import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {MarcadorDirective} from './marcador/marcador.directive';
import { MejordirectiveDirective } from './MejorDirectiva/mejordirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    MarcadorDirective,
    MejordirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
