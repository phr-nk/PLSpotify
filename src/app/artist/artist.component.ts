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

  constructor(private _spotifyService:SpotifyService,private _route:ActivatedRoute) { }

  ngOnInit() {
    }

}
