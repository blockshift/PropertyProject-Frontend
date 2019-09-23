import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { Observable,throwError as observableThrowError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router,private cookieservice: CookieService) { }

  cookievalue='';
  canActivate() {

    this.cookievalue = this.cookieservice.get('SESSIONID');
  	console.log(this.cookievalue);
  
    if(this.cookievalue)
    	return true;
    else{
    this.router.navigate(['/public/login']);
    return false;
	}

   
   
}


}
