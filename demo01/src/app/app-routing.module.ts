import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspecialidadComponent } from './component/especialidad/especialidad.component';
import { EspecialidadInsertarComponent } from './component/especialidad/especialidad-insertar/especialidad-insertar.component';


import { EstadoInsertarComponent } from './component/estado/estado-insertar/estado-insertar.component';
import { EstadoComponent } from './component/estado/estado.component';


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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
