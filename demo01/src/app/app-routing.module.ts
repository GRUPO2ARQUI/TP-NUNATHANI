import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspecialidadComponent } from './component/especialidad/especialidad.component';
import { EspecialidadInsertarComponent } from './component/especialidad/especialidad-insertar/especialidad-insertar.component';


import { EstadoInsertarComponent } from './component/estado/estado-insertar/estado-insertar.component';
import { EstadoComponent } from './component/estado/estado.component';

import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioInsertarComponent } from './component/usuario/usuario-insertar/usuario-insertar.component';

import { DisponibilidadInsertarComponent } from './component/disponibilidad/disponibilidad-insertar/disponibilidad-insertar.component';
import { DisponibilidadComponent } from './component/disponibilidad/disponibilidad.component';

const routes: Routes = [
  {
    path: 'especialidad',
    component: EspecialidadComponent,
    children: [
      {
        path: 'especialidadinsertar',component: EspecialidadInsertarComponent},
      {path: 'edicion/:id',component: EspecialidadInsertarComponent},

    ],
  },
  
  {
    path: 'estado',component: EstadoComponent,children: [
      {path: 'estadoinsertar', component: EstadoInsertarComponent},
      {path: 'edicion/:id', component: EstadoInsertarComponent},
    ],
  },
  
  {
    path:'usuario',
    component:UsuarioComponent,
    children: [
      {path: 'usuario-insertar', component: UsuarioInsertarComponent},
      {path: 'edicion/:id', component: UsuarioInsertarComponent},
    ],
  },  
 {
    path: 'disponibilidad',
    component: DisponibilidadComponent
    ,
    children: [
      {path: 'disponibilidadinsertar', component: DisponibilidadInsertarComponent},
      {path: 'edicion/:id', component: DisponibilidadInsertarComponent},
    ],
  },

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
