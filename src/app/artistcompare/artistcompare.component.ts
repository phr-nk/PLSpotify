import { Component, OnInit } from '@angular/core';
import {Artist} from "../../Artist";
//import {ActivatedRoute} from '@angular/router';
//import { SpotifyService } from "../services/spotify.service";
import {ArtistComponent} from '../artist/artist.component';

@Component({
  selector: 'app-artistcompare',
  templateUrl: './artistcompare.component.html',
  styleUrls: ['./artistcompare.component.css']
})
export class ArtistcompareComponent implements OnInit {

  listofart = []
  name:string
  barChartLabels =[]
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType = 'bar';
  public barChartLegend = true;
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
      this.barChartLabels.push(inputValue)
      console.log(this.listofart)
    }
  }
  removeName()
  {
    this.listofart.pop()
    this.barChartLabels.pop()
    console.log(this.listofart)
  }
  clearInput()
  {
    (<HTMLInputElement>document.getElementById('input1')).value = '';
  }
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
  ];

  ngOnInit() {
  }

}
