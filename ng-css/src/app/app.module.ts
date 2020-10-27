import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CssSelectorsComponent } from './css-selectors/css-selectors.component';
import { CssPseudoElementsComponent } from './css-pseudo-elements/css-pseudo-elements.component';
import { CssMediaQueryComponent } from './css-media-query/css-media-query.component';

@NgModule({
  declarations: [
    AppComponent,
    CssSelectorsComponent,
    CssPseudoElementsComponent,
    CssMediaQueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
