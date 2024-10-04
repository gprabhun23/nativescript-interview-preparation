import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfModule } from './pdf/pdf-viewer.module';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { ListComponent } from './pdf/list.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, PdfModule, NativeScriptUIListViewModule ],
  declarations: [AppComponent, ListComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
