import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { FormConnexionComponent } from './components/form-connexion/form-connexion.component';
import { ListUserComponent } from './list-user/list-user.component';


const routes: Routes = [
  {path:'login',component: FormConnexionComponent}  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
