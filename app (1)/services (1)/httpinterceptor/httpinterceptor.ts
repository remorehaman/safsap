
import {HttpInterceptor} from '@angular/common/http';

export class HttpInterceptors implements HttpInterceptor{

  constructor() { }
  intercept(req, next){
  
    let tokenReq = req.clone({
      setHeaders: {
       X_API_KEY:'CODEX@123',
       Authorization:'Basic YWRtaW46MTIzNA=='
          
      }
    })
    return next.handle(tokenReq)
  }
 
}