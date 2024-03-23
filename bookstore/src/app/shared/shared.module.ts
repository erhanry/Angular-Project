import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FliptemplateComponent } from './fliptemplate/fliptemplate.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BreadcrumbComponent, FliptemplateComponent],
  imports: [CommonModule, RouterModule],
  exports: [BreadcrumbComponent, FliptemplateComponent],
})
export class SharedModule {}
