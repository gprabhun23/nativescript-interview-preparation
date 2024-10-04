import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { knownFolders } from '@nativescript/core';
import { ItemService, IType } from './item.service';
import { isIOS } from '@nativescript/core';

@Component({
  selector: 'demo-pdf',
  templateUrl: 'pdf-viewer.component.html',
})
export class PdfViewerComponent {
  pdfUrl: string = '';
  title: string = '';
  loading: boolean = true;
  constructor(private route: ActivatedRoute, private itemService: ItemService) {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadPDF(id);
    });

  }

  public loadPDF(id: number): void {
    const item: IType = this.itemService.items.find((e) => e.id === id);
    if (item) {
      if (isIOS) {
        // For iOS, load the PDF from the App_Resources/iOS folder
        const iosPdfFilePath = `https://firebasestorage.googleapis.com/v0/b/interviewbooks-3ac7f.appspot.com/o/${item.fileName}?alt=media`;
        this.pdfUrl = iosPdfFilePath;
      } else {
        // Handle Android or other platforms
        const pdfFile = knownFolders.currentApp().getFolder('assets').getFile(item.fileName);
        this.pdfUrl = pdfFile.path;
      }
      this.title = item.name;
      this.loading = false;
    } else {
      this.loading = false;
    }
  }
}
