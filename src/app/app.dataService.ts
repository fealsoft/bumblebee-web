import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WordEngLite} from "./WordEngLite";
import {WordUkrLite} from "./WordUkrLite";
import {NameEng} from "./NameEng";
import {NameUkr} from "./NameUkr";
import {SurnameEng} from "./SurnameEng";
import {SurnameUkr} from "./SurnameUkr";
import {GeographicEng} from "./GeographicEng";
import {GeographicUkr} from "./GeographicUkr";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = 'http://localhost:8278';

  constructor(private httpClient: HttpClient) {
  }

  public allEnglishWords(): Observable<WordEngLite[]> {
    return this.httpClient.get<WordEngLite[]>(this.REST_API_SERVER + '/words/eng-all');
  }

  public allUkrainianWords(): Observable<WordUkrLite[]> {
    return this.httpClient.get<WordUkrLite[]>(this.REST_API_SERVER + '/words/ukr-all');
  }

  public allEnglishNames(): Observable<NameEng[]> {
    return this.httpClient.get<NameEng[]>(this.REST_API_SERVER + '/names/eng-all');
  }

  public allUkrainianNames(): Observable<NameUkr[]> {
    return this.httpClient.get<NameUkr[]>(this.REST_API_SERVER + '/names/ukr-all');
  }

  public allEnglishSurnames(): Observable<SurnameEng[]> {
    return this.httpClient.get<SurnameEng[]>(this.REST_API_SERVER + '/surnames/eng-all');
  }

  public allUkrainianSurnames(): Observable<SurnameUkr[]> {
    return this.httpClient.get<SurnameUkr[]>(this.REST_API_SERVER + '/surnames/ukr-all');
  }

  public allEnglishGeographic(): Observable<GeographicEng[]> {
    return this.httpClient.get<GeographicEng[]>(this.REST_API_SERVER + '/geographic/eng-all');
  }

  public allUkrainianGeographic(): Observable<GeographicUkr[]> {
    return this.httpClient.get<GeographicUkr[]>(this.REST_API_SERVER + '/geographic/ukr-all');
  }
}
