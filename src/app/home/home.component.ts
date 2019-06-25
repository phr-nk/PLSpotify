import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../services/spotify.service";
import {Artist} from "../../Artist";
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[SpotifyService] 
})
export class HomeComponent implements OnInit {
  searchStr:string;
  searchRes:Artist[]; //result of query

  years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
  // For drawing the lines
  africa = [86,114,106,106,107,111,133,221,783,2478];
  asia = [282,350,411,502,635,809,947,1402,3700,5267];
  europe = [168,170,178,190,203,276,408,547,675,734];
  latinAmerica = [40,20,10,16,24,38,74,167,508,784];
  northAmerica = [6,3,2,2,7,26,82,172,312,433];


  constructor(private _spotifyService:SpotifyService) { }
  searchMusic(){
    this._spotifyService.getToken()
      .subscribe(res => {
          this._spotifyService.searchMusic(this.searchStr ,'artist' , res.access_token)
            .subscribe(res=> {
              this.searchRes =res.artists.items;
         })
      })
    
 } 
 getChart()
 {
  new Chart(document.getElementById("myChart"), {
    type: 'pie',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});

 }
  

  ngOnInit() {
    }
}
