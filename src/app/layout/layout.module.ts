import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }