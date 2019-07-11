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
    id: undefined,
    name:undefined,
    genres:undefined,
    ablums:undefined,
    numberofgenres:undefined,
    followers:undefined,
    popularity:undefined

  };
  //bar chart varibles
  possibleLabels ={followers: 'Followers',
                   popularity: "Popularity",
                   genrecount: "Number of Genres"
                  }
  barChartLabels =[]
  barData =[]
  public barChartData = [{data: this.barData, label:this.possibleLabels.followers}]
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
      this.barChartLabels.push(inputValue)
      console.log(this.listofart)
    }
  }
  removeName()
  {
    this.listofart.pop()
    this.barChartLabels.pop()
    this.barData.pop()
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
              this.barData.push(this.newArtist.followers)
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
    elem.parentNode.removeChild(elem)
  }
 
  
  ngOnInit() {
  }

}
