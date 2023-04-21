import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebcontentRoutingModule } from './webcontent-routing.module';
import { PagesListComponent } from './pages-list/pages-list.component';
import { SectionListComponent } from './section-list/section-list.component';
import { WebcontentComponent } from './webcontent.component';


@NgModule({
  declarations: [
    PagesListComponent,
    SectionListComponent,
    WebcontentComponent
  ],
  imports: [
    CommonModule,
    WebcontentRoutingModule
  ]
})
export class WebcontentModule { }
