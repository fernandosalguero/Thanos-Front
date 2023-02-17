import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modulo_lider/components/home/home.component';
import { HomeComponentSA } from './modulo_super_admin/components/home/home.component';
import { HomeAnalistasComponent } from './modulo_analistas/components/home-analistas/home-analistas.component';

const routes: Routes = [

{path: 'auth',
loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
},

{path: 'lider',
component: HomeComponent,
loadChildren: () => import('./modulo_lider/lider.module').then( m => m.LiderModule)
},
{path: 'sa',
component: HomeComponentSA,
loadChildren: () => import('./modulo_super_admin/super-admin.module').then( m => m.SuperAdminModule)
},
{path: 'analistas',
component: HomeAnalistasComponent,
loadChildren: () => import('./modulo_analistas/analistas.module').then( m => m.AnalistasModule)
},

{
  path: '**', redirectTo: 'auth/login'
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
