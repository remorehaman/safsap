import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptors } from './services/httpinterceptor/httpinterceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlugPipe } from './pipes/slug.pipe';

//import { CustomlinkComponent } from './modules/customlink/customlink/customlink.component';



@NgModule({
  declarations: [
    AppComponent,
   
    
    //CustomlinkComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    
  
    
  ],
  providers: [/*{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptors,
    multi: true
     
  }*/
SlugPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
