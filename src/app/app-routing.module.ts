import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { AdministrarCamillasComponent } from './users/administrar-camillas/administrar-camillas.component';
import { IngresarUsuarioComponent } from './users/ingresar-usuario/ingresar-usuario.component';



const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },{
     path: 'sidebar',
     component: SidebarComponent,
     children: [

     {
      path: 'usuario',
      component: IngresarUsuarioComponent,
     },
     {
      path:'camillas',
      component: AdministrarCamillasComponent
     },
     {
      path:'**',
      redirectTo: 'usuario'
     }

     ]
  },{
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
