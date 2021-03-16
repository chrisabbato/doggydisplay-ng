import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoggosComponent } from './doggos/doggos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'doggos', redirectTo: 'doggos/', pathMatch: 'full' },
  { path: 'doggos/:breed', component: DoggosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
