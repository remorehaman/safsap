import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GetPopularCategoriesService {

  constructor(private httpClient: HttpClient) { }

  siteUrl = environment.siteUrl;

  // getPopularCategories(){
  //   return this.httpClient.get<any>(this.siteUrl + "restapi/data/popularcategories" );
  // }

  getPopularCategories(){
    return this.httpClient.get<any>(this.siteUrl + "frontapi/data/getpopularcategories" );
  }
}
