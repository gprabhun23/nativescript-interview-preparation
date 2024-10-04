import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule,
} from '@nativescript/angular';
import { NativeScriptPdfModule } from '@nativescript/pdf/angular';
import { PdfViewerComponent } from './pdf-viewer.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild([
      { path: '', component: PdfViewerComponent },
    ]),
    NativeScriptPdfModule,
  ],
  declarations: [PdfViewerComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PdfModule { }
