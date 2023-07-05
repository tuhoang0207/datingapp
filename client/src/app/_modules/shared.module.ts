import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FormGroup } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { NgxGalleryModule } from '@kolkov/ngx-gallery';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //  BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    FileUploadModule,
    NgxGalleryModule
    // TabsModule.forRoot()
  ],
  exports: [
    // BsDropdownModule,
    // ToastrModule
     NgxGalleryModule,

  ],
})
export class SharedModule {}
