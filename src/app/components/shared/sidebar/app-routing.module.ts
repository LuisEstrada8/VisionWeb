import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

const routes: Routes=[
{
  path: '',
  children:[
    {path:'sidebar',component: SidebarComponent}
  ]
}

]

@NgModule({
  imports: [
   RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule { }
