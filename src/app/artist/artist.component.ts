import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../services/spotify.service";
import {Artist} from "../../Artist";
import {Album} from "../../Album";
import {ActivatedRoute} from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],

})
export class ArtistComponent implements OnInit 
{
  id:string; //id for specific artist
  artist:Artist[]; //artist object
  albums:Album[];

  genreCount:number;

  constructor(private _spotifyService:SpotifyService,private _route:ActivatedRoute) { }


  ngOnInit() //when the page is opened
  {
    this._route.params.pipe(
    map(params => params['id'])) //map each parameter with id
    .subscribe((id) => { 
        console.log("ID", id)
       this._spotifyService.getToken()
        .subscribe(data => {
          this._spotifyService.getArtist(id)
           .subscribe(artist=> {
             this.artist = artist;
             this.genreCount = artist.genres.length;
             console.log(this.artist);
          })
        })
    })
  }

}
