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
  artist:Artist[];
  albums:Album[];

  constructor(private _spotifyService:SpotifyService,private _route:ActivatedRoute) { }

  ngOnInit() 
  {

    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + this._spotifyService.getToken());
    this._route.params.pipe(
    map(params => params['id']))
    .subscribe((id) => { 
        console.log("ID", id)
       this._spotifyService.getToken()
        .subscribe(data => {
          this._spotifyService.getArtist(id, data.access_token)
           .subscribe(artist=> {
             this.artist = artist;
             console.log(this.artist)
          })
        })
    })
  }

}
