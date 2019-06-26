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
 
  

  ngOnInit() {
    }
}
