import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackFromComponent } from './feedback-from/feedback-from.component';

const routes: Routes = [
  { path: '', redirectTo: '/feedback-form', pathMatch: 'full' },
  { path: 'feedback-formm', component: FeedbackFromComponent },
  { path: 'feedback-list', component: FeedbackListComponent },
  { path: '**', redirectTo: '/feedback-form' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
