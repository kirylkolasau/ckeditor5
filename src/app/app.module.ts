import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CkeditorComponent } from './ckeditor/ckeditor.component';

@NgModule({
  declarations: [
    AppComponent,
    CkeditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
