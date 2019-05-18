;
import { NietoComponent } from './contador/nieto/nieto.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { hijoComponent } from './contador/hijo/hijo.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, hijoComponent, NietoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
