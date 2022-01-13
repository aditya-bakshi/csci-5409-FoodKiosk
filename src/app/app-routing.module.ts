import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from 'src/components/home-component.component';
import { ReviewComponent } from 'src/components/review.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'reviews', component: ReviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }