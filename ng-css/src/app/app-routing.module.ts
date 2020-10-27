import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CssMediaQueryComponent } from './css-media-query/css-media-query.component';
import { CssPseudoElementsComponent } from './css-pseudo-elements/css-pseudo-elements.component';
import { CssSelectorsComponent } from './css-selectors/css-selectors.component';

const routes: Routes = [
  {
    path: '01-css',
    component: CssSelectorsComponent
  },
  {
    path: '02-css',
    component: CssPseudoElementsComponent
  },
  {
    path: '03-css',
    component: CssMediaQueryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
