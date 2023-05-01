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
  
];

 disponibilidad: [
      {
        id: 1,
        inicio_turno: "08:00",
        fin_turno: "14:00",
        dias_laborales: ["Lunes", "Miércoles", "Viernes"]
      },
      {
        id: 2,
        inicio_turno: "12:00",
        fin_turno: "18:00",
        dias_laborales: ["Miércoles", "Viernes"]
      },
      {
        id: 3,
        inicio_turno: "10:00",
        fin_turno: "16:00",
        dias_laborales: ["Lunes", "Viernes"]
      },
      {
        id: 4,
        inicio_turno: "14:00",
        fin_turno: "20:00",
        dias_laborales: ["Martes", "Jueves"]
      }
    ],

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
