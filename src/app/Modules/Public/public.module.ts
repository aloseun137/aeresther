import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PUBLIC_ROUTES } from './public.routing';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PublicComponent } from './public.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';



@NgModule({
  declarations: [HomeComponent, ContactUsComponent, PublicComponent, AboutUsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(PUBLIC_ROUTES),
    CommonModule
  ],
  exports: [RouterModule],
})
export class PublicModule { }
