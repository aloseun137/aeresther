import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './Modules/Public/pages/contact-us/contact-us.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./Modules/Public/public.module').then(m => m.PublicModule)},
  {
    path: 'admin',
    loadChildren: './Modules/Admin/admin.module#AdminModule',
  },
  {
    path: 'user',
    loadChildren: './Modules/User/user.module#UserModule',
  },
  // {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
