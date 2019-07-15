import { Component, OnInit } from '@angular/core';
import {Artist} from "../../Artist";
import { SpotifyService } from "../services/spotify.service";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-artistcompare',
  templateUrl: './artistcompare.component.html',
  styleUrls: ['./artistcompare.component.css']
})
export class ArtistcompareComponent implements OnInit {

  listofart = [] //store the user entered names
  verifiedNames: Artist[] = [] //list that will contain only artists that exist

  //initialize newArtist as artist object with its member varibles undefined
  newArtist: Artist = {
    id: 0,
    name:'',
    genres:'',
    ablums:undefined,
    numberofgenres:0,
    followers:0,
    popularity:0

  };
  //bar chart varibles
  possibleLabels ={followers: 'Followers',
                   popularity: "Popularity",
                   genrecount: "Number of Genres"
                  }
  barChartLabels = []
  barDataFollowers =[]
  barDataPop =[]
  barDataGenreCount =[]
  public barChartData = [{data: this.barDataFollowers, label:this.possibleLabels.followers},
                          {data: this.barDataPop, label:this.possibleLabels.popularity},
                          {data: this.barDataGenreCount, label:this.possibleLabels.genrecount}
                        ]
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType = 'bar';
  public barChartLegend = true;
  
  //include spotify service in order to add new artists 
  constructor(private _spotifyService:SpotifyService) { }

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
      //this.barChartLabels.push(inputValue)
      console.log(this.listofart)
    }
  }
  removeName()
  {
    this.listofart.pop()
    this.barChartLabels.pop()
    this.barDataFollowers.pop()
    this.barDataPop.pop()
    this.barDataGenreCount.pop()
    console.log(this.listofart)
  }
  clearInput()
  {
    (<HTMLInputElement>document.getElementById('input1')).value = '';
  }
  verifyName(artistName: string)
  {
    //verify that the name they entered exists

    this._spotifyService.getToken()
      .subscribe(res => {
          this._spotifyService.searchMusic(artistName ,'artist' , res.access_token)
            .subscribe(res=> {
              this.newArtist.name =res.artists.items[0].name
              this.newArtist.followers = res.artists.items[0].followers.total
              this.newArtist.popularity = res.artists.items[0].popularity
              this.newArtist.numberofgenres = res.artists.items[0].genres.length
              this.verifiedNames.push(this.newArtist)
              this.barChartLabels.push(this.newArtist.name)
              this.barDataFollowers.push(this.newArtist.followers)
              this.barDataPop.push(this.newArtist.popularity)
              this.barDataGenreCount.push(this.newArtist.numberofgenres)
              console.log(this.newArtist)
         })
      })
  }
  verifyNames()
  {
    for(var i =0; i < this.listofart.length; i++)
    {
      this.verifyName(this.listofart[i]) 
      console.log(this.verifiedNames)
    }
  }
  changeButton()
  {
    var elem = (<HTMLInputElement>document.getElementById('sumbitButton'));
    elem.parentNode.removeChild(elem);
    return false;
  }
 
  
  ngOnInit() {
  }

}
