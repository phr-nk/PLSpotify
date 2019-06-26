import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../services/spotify.service";
import {Artist} from "../../Artist";
import {Album} from "../../Album";
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],

})
export class ArtistComponent implements OnInit {
  id:string;
  artist:Artist[];
  albums:Album[];

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

  constructor(private _spotifyService:SpotifyService,private _route:ActivatedRoute) { }

  ngOnInit() {
    }

}
