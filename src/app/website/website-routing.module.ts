import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { WebsiteComponent } from './website.component';
import { ConvertImgComponent } from './convert-img/convert-img.component';
import { ViewImgComponent } from './view-img/view-img.component';
import { CompressImgComponent } from './compress-img/compress-img.component';
import { ResizeImgComponent } from './resize-img/resize-img.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {
        path: '',
        component: ViewImgComponent,
        title: 'ImgLab - View Image',
      },
      {
        path: 'convert-image',
        component: ConvertImgComponent,
        title: 'ImgLab - Convert Image',
      },
      {
        path: 'compress-image',
        component: CompressImgComponent,
        title: 'ImgLab - Compress Image',
      },
      {
        path: 'resize-image',
        component: ResizeImgComponent,
        title: 'ImgLab - Resize Image',
      },
      {
        path: 'privacy',
        component: PrivacyComponent,
      },
      {
        path: 'terms',
        component: TermsComponent,
      },
      {
        path: '**',
        redirectTo: '/',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
