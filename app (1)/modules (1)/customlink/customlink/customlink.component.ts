import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { CustomlinkService } from 'src/app/services/customlink.service';

@Component({
  selector: 'app-customlink',
  templateUrl: './customlink.component.html',
  styleUrls: ['./customlink.component.css']
})
export class CustomlinkComponent implements OnInit {

  linkSlug :string = '';
  alllinkDetails: linkContent;
  pageTitle: string;
  pageContent: string;
  constructor(
    private route: ActivatedRoute,
    private customLink:CustomlinkService
    ) { }

  ngOnInit(): void {
    if(this.route.snapshot.params['linkslug'])
    {
      this.linkSlug = this.route.snapshot.params['linkslug'];
      this.route.params.subscribe((params:Params)=>{

        this.customLink.getLinkDetails(this.linkSlug).subscribe((data: any)=>{
          
          this.alllinkDetails=data.page_details;
          this.pageTitle = this.alllinkDetails.pageTitle;
          this.pageContent = this.alllinkDetails.pageContent;
          console.log(this.alllinkDetails);
          //console.log(data);
          

        })
      
      });
    }
  }

}

class linkContent{
  metaDescription:string;
  metaKeyword: string;
  metaTitle: string;
  pageContent: string;
  pageSlug: string;
  pageTitle: string;

}
