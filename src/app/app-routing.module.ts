import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Forms01Component } from './forms-01/forms-01.component';
import { Cards01Component } from './cards-01/cards-01.component';

const routes: Routes = [
  { path: 'forms-01', component: Forms01Component},
  { path:'cards-01', component: Cards01Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [Forms01Component]
