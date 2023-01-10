import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValoracionsComponent } from './Projecte/Components/valoracions/valoracions.component';
import { CriterisComponent } from './Projecte/Components/criteris/criteris.component';
import { ResultatsComponent } from './Projecte/Components/resultats/resultats.component';
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' 

@NgModule({
  declarations: [
    AppComponent,
    ValoracionsComponent,
    CriterisComponent,
    ResultatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,//Add if needed 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
