import { SjComponent } from './sj/sj.component';
import { SeattleComponent } from './seattle/seattle.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
SjComponent

const routes: Routes = [
  {path: 'seattle', component: SeattleComponent},
  {path: 'sj', component: SjComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
