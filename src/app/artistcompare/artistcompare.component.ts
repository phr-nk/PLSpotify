import { Component, OnInit } from '@angular/core';
//import {ActivatedRoute} from '@angular/router';
//import { SpotifyService } from "../services/spotify.service";
import {ArtistComponent} from '../artist/artist.component';

@Component({
  selector: 'app-artistcompare',
  templateUrl: './artistcompare.component.html',
  styleUrls: ['./artistcompare.component.css']
})
export class ArtistcompareComponent implements OnInit {

  listofart =[]
  name:string
  poop = "big poop"
  constructor() { }
  addNames()
  {
    var inputValue = (<HTMLInputElement>document.getElementById('input1')).value;
    console.log(inputValue)
    if(inputValue == ' ' ||  inputValue == '' || inputValue == null)
    {
      Error('You must enter a name')
    }
    else
    {
      this.listofart.push(inputValue)
      console.log(this.listofart)
    }
  
          
  }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  ngOnInit() {
  }

}
