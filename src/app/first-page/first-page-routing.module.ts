import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page.component';

const routes: Routes = [{ path: 'page1', title: 'App Page 1', component: FirstPageComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstPageRoutingModule { }
