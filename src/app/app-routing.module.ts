import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

// TODO: Alterar components para valores reais (todas as rotas estão apontando para HomeComponent)
const routes: Routes = [
  {​​ path: '', redirectTo: 'home', pathMatch: 'full'}​​,
  { path: 'home', component: HomeComponent},
  { path: 'restaurante-purple-earth', component: HomeComponent},
  { path: 'restaurante-a-opus-somos-nos', component: HomeComponent},
  { path: 'restaurante-nojentao', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
