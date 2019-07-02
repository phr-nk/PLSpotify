import { Injectable }from '@angular/core';
import {Http, Headers,Response, URLSearchParams, RequestOptions} from'@angular/http';
import { map, catchError} from 'rxjs/operators';
import {tap} from 'rxjs/internal/operators';
import { pipe } from 'rxjs';

@Injectable()
export class SpotifyService
{

    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl:string;
    private albumUrl:string;
    private client_id ='996080937ebb4594a0979146c9c0c121';
    private client_secret = '0bda3cfd213c4622bc6c562586568ec8';
    private accesstoken:any;
    private tokenType:string;
    private encoded = btoa(this.client_id + ':' + this.client_secret);
    private base64 = 'OTk2MDgwOTM3ZWJiNDU5NGEwOTc5MTQ2YzljMGMxMjE6MGJkYTNjZmQyMTNjNDYyMmJjNmM1NjI1ODY1NjhlYzg=';

    constructor(private _http:Http)
    {

    }
    getToken()
    {
         //let authTokenURL ='https://accounts.spotify.com/api/token'
         let authTokenURL ='/api/token';
         let params = 'grant_type=client_credentials';
 
         let headers = new Headers();
         headers.append( 'Authorization', 'Basic ' + this.encoded);
        
         headers.append('Content-Type' , 'application/x-www-form-urlencoded');

         let options = new RequestOptions({headers: headers});
 
         return this._http.post(authTokenURL, params , options )
         .pipe(map(res=> res.json())).pipe(tap(token=>{
             this.accesstoken =token.access_token;
             this.tokenType = token.token_type;
         }, catchError => console.log(catchError)));
      }
    searchMusic(str:string, type='artist',token:string)
    {
        const options = this.getOptions()
        this.searchUrl='https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=50&type='+type;
        return this._http.get(this.searchUrl ,options).pipe(map((res:Response) => res.json()) );
       
    }
    getArtist(id:string)
    {
        const options = this.getOptions();
        this.artistUrl='/artists/'+id;

        return this._http.get(this.artistUrl ,options).pipe(map((res:Response) => res.json()));
    }
    private getOptions() {
        console.log(this.accesstoken);
        console.log(this.tokenType);
    
        let header = new Headers();
        header.append('Authorization', this.tokenType + ' ' + this.accesstoken);
        let options = new RequestOptions({ headers: header });
    
        return options;
      }
}