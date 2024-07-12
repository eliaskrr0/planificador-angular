import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutinasComponent } from './menu/rutinas/rutinas.component';
import { CalendarioComponent } from './menu/calendario/calendario.component';

const routes: Routes = [
  { path: 'rutinas', component: RutinasComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: '', redirectTo: '/rutinas', pathMatch: 'full' } // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
