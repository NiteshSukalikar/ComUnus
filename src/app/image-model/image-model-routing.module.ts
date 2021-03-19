import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageModelPage } from './image-model.page';

const routes: Routes = [
  {
    path: '',
    component: ImageModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageModelPageRoutingModule {}
