import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CustomlinkService{
    constructor(private httpClient: HttpClient) { }

    siteUrl = environment.siteUrl;
    getLinkDetails(linkSlug){
        return this.httpClient.get<any>(this.siteUrl+ 'frontapi/data/cmslisting/'+linkSlug)
      }
}