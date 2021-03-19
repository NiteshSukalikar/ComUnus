import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageModelPageRoutingModule } from './image-model-routing.module';

import { ImageModelPage } from './image-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageModelPageRoutingModule
  ],
  declarations: [ImageModelPage]
})
export class ImageModelPageModule {}
