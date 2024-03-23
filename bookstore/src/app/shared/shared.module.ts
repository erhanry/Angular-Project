import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FliptemplateComponent } from './fliptemplate/fliptemplate.component';
import { RouterModule } from '@angular/router';
import { PricePipe } from './price.pipe';

@NgModule({
  declarations: [BreadcrumbComponent, FliptemplateComponent, PricePipe],
  imports: [CommonModule, RouterModule],
  exports: [BreadcrumbComponent, FliptemplateComponent],
})
export class SharedModule {}
