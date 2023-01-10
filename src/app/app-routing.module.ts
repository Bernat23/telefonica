import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriterisComponent as criteris } from './Projecte/Components/criteris/criteris.component';
import { ResultatsComponent as resultat } from './Projecte/Components/resultats/resultats.component';
import { ValoracionsComponent as valoracions } from './Projecte/Components/valoracions/valoracions.component';

const routes: Routes = [
  { path: 'criteris', component: criteris },
  { path: 'valoracions', component: valoracions },
  { path: 'resultat', component: resultat}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
