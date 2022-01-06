import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { NewsComponent } from './news/news.component';
import { ButtonComponent } from './button/button.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { AccordionComponent} from './accordion/accordion.component';
import { CheckBoxComponent} from './check-box/check-box.component'; 
import { MatSliderModule } from '@angular/material/slider';


import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';

@NgModule({ 
  declarations: [
    AppComponent,
    NewsComponent,
    ButtonComponent,
    PageTitleComponent,
    AccordionComponent,
    CheckBoxComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent , NewsComponent, ButtonComponent, PageTitleComponent, AccordionComponent, CheckBoxComponent]
})
export class AppModule {

  constructor(private injector: Injector) {

    let el = createCustomElement(ButtonComponent, { injector });
    customElements.define('button-wc', el);

    el = createCustomElement(PageTitleComponent, { injector });
    customElements.define('page-title-wc', el);

    el = createCustomElement(AccordionComponent, { injector });
    customElements.define('accordion-wc', el);

    el = createCustomElement(CheckBoxComponent, { injector });
    customElements.define('checkbox-wc', el);
  }
  ngDoBootstrap() {}

 }
