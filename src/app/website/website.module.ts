import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConvertImgComponent } from './convert-img/convert-img.component';
import { ViewImgComponent } from './view-img/view-img.component';
import { CompressImgComponent } from './compress-img/compress-img.component';
import { ResizeImgComponent } from './resize-img/resize-img.component';

@NgModule({
  declarations: [
    WebsiteComponent,
    PrivacyComponent,
    TermsComponent,
    ConvertImgComponent,
    ViewImgComponent,
    CompressImgComponent,
    ResizeImgComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class WebsiteModule {}
