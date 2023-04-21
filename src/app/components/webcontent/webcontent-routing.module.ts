import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesListComponent } from './pages-list/pages-list.component';
import { SectionListComponent } from './section-list/section-list.component';
import { WebcontentComponent } from './webcontent.component';

const routes: Routes = [
  {
    path: '',
    component: WebcontentComponent
  },
  {
    path: 'pages',
    component: PagesListComponent
  },
  {
    path: 'sections',
    component: SectionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebcontentRoutingModule { }
