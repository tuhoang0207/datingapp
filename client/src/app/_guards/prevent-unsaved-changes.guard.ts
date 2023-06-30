import { BusyService } from './../_services/busy.service';
import { ActivatedRouteSnapshot, ActivationEnd, CanDeactivate, CanDeactivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { Observable } from 'rxjs';

export const PreventUnsavedChangesGuard: CanDeactivateFn<unknown> = (component: MemberEditComponent) => {
      
      if(component.editForm?.dirty) {
        return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
      }
      return true;
    
}