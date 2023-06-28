import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
// import { NgxGalleryModule } from '@kolkov/ngx-gallery';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //  BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    // NgxGalleryModule,
    // TabsModule.forRoot()
  ],
  exports: [
    // BsDropdownModule,
    // ToastrModule
    // NgxGalleryModule,
  ],
})
export class SharedModule {}
