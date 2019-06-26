import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from "../services/spotify.service";

@Component({
  selector: 'app-artistcompare',
  templateUrl: './artistcompare.component.html',
  styleUrls: ['./artistcompare.component.css']
})
export class ArtistcompareComponent implements OnInit {

  constructor(private _spotifyService:SpotifyService,private _route:ActivatedRoute) { }
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
