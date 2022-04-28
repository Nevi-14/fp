import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionarFechaPageRoutingModule } from './seleccionar-fecha-routing.module';

import { SeleccionarFechaPage } from './seleccionar-fecha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionarFechaPageRoutingModule
  ],
  declarations: [SeleccionarFechaPage]
})
export class SeleccionarFechaPageModule {}
