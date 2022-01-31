import { Component, OnInit } from '@angular/core';
import { CookerNearbyService } from '../../../services/cooker-nearby.service';
@Component({
  selector: 'app-cooker-nearby',
  templateUrl: './cooker-nearby.component.html',
  styleUrls: ['./cooker-nearby.component.css']
})
export class CookerNearbyComponent implements OnInit {
  getcookernearby: Array<any>=[];
  cooker: any

  constructor( private cookerNearby:CookerNearbyService) { }

  ngOnInit(): void {
    this.cookerNearby.getcookernearby().subscribe(data =>{
      console.log(data);
      //data = JSON.parse(data);
      data.cooker.forEach((cooker, index) => {

        //this.getcookernearby.push(item);
        this.getcookernearby.push(cooker);
      });
      //this.getcookernearby.push(data.cooker);
    })
    console.log(this.getcookernearby);
  }

}
