import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

// Definimos cada uno de mis rutas
const routes: Routes = [
  {
    path: '',
    component: PorPaisComponent, // Tiene que esta importado en el app.module.ts y exportado.
    pathMatch: 'full' // Para que sea la ruta por defecto
  },
  {
    path: 'region',
    component: PorRegionComponent,
  },
  {
    path: 'capital',
    component: PorCapitalComponent,
  },
  {
    path: 'pais/:id',
    component: VerPaisComponent,
  },
  {
    path: '**',
    redirectTo: '' // Si no encuentra la ruta, redirecciona a la ruta por defecto
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // ForRoot es para rutas principales
  ],
  exports: [
    RouterModule // Para que se pueda usar en otros modulos
  ]
})

export class AppRoutingModule { }
