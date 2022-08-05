import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [   
    HeaderComponent,
    FooterComponent,
    ],
  imports: [
    RouterModule,
    CommonModule,
    CarouselModule
  ],
  exports: [HeaderComponent, FooterComponent, RouterModule, CarouselModule]
})
export class SharedModule { }
