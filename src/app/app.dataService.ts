import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {WordEng} from "./WordEng";
import {WordUkr} from "./WordUkr";
import {NameEng} from "./NameEng";
import {NameUkr} from "./NameUkr";
import {SurnameEng} from "./SurnameEng";
import {SurnameUkr} from "./SurnameUkr";
import {GeographicEng} from "./GeographicEng";
import {GeographicUkr} from "./GeographicUkr";
import {CaseGeographicUkr} from "./CaseGeographicUkr";
import {CaseNameUkr} from "./CaseNameUkr";
import {TranslateNameUkr} from "./TranslateNameUkr";
import {CaseSurnameUkr} from "./CaseSurnameUkr";
import {TranslateSurnameUkr} from "./TranslateSurnameUkr";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = 'http://localhost:8278';

  constructor(private httpClient: HttpClient) {
  }

  public allEnglishWords(): Observable<WordEng[]> {
    return this.httpClient.get<WordEng[]>(this.REST_API_SERVER + '/words/eng-all');
  }

  public allUkrainianWords(): Observable<WordUkr[]> {
    return this.httpClient.get<WordUkr[]>(this.REST_API_SERVER + '/words/ukr-all');
  }

  public allEnglishNames(): Observable<NameEng[]> {
    return this.httpClient.get<NameEng[]>(this.REST_API_SERVER + '/names/eng-all');
  }

  public allUkrainianNames(): Observable<NameUkr[]> {
    return this.httpClient.get<NameUkr[]>(this.REST_API_SERVER + '/names/ukr-all');
  }

  public getCaseNameUkr(nameUkrId: number): Observable<CaseNameUkr> {

    let params = new HttpParams()
      .set('nameUkrId', nameUkrId);

    return this.httpClient.get<CaseNameUkr>(this.REST_API_SERVER + '/names/case-ukr', { params: params });
  }

  public getNameTranslate(nameEngId: number): Observable<TranslateNameUkr[]> {

    let params = new HttpParams()
      .set('nameEngId', nameEngId);

    return this.httpClient.get<TranslateNameUkr[]>(this.REST_API_SERVER + '/names/translate', { params: params });
  }

  public allEnglishSurnames(): Observable<SurnameEng[]> {
    return this.httpClient.get<SurnameEng[]>(this.REST_API_SERVER + '/surnames/eng-all');
  }

  public allUkrainianSurnames(): Observable<SurnameUkr[]> {
    return this.httpClient.get<SurnameUkr[]>(this.REST_API_SERVER + '/surnames/ukr-all');
  }

  public getCaseSurnameUkr(surnameUkrId: number): Observable<CaseSurnameUkr> {

    let params = new HttpParams()
      .set('surnameUkrId', surnameUkrId);

    return this.httpClient.get<CaseSurnameUkr>(this.REST_API_SERVER + '/surnames/case-ukr', { params: params });
  }

  public getSurnameTranslate(surnameEngId: number): Observable<TranslateSurnameUkr> {

    let params = new HttpParams()
      .set('surnameEngId', surnameEngId);

    return this.httpClient.get<TranslateSurnameUkr>(this.REST_API_SERVER + '/surnames/translate', { params: params });
  }

  public allEnglishGeographic(): Observable<GeographicEng[]> {
    return this.httpClient.get<GeographicEng[]>(this.REST_API_SERVER + '/geographic/eng-all');
  }

  public allUkrainianGeographic(): Observable<GeographicUkr[]> {
    return this.httpClient.get<GeographicUkr[]>(this.REST_API_SERVER + '/geographic/ukr-all');
  }

  public getCaseGeographicUkr(geographicUkrId: number): Observable<CaseGeographicUkr> {

    let params = new HttpParams()
      .set('geographicUkrId', geographicUkrId);

    return this.httpClient.get<CaseGeographicUkr>(this.REST_API_SERVER + '/geographic/case-ukr', { params: params });
  }

  public getGeographicTranslate(geographicEngId: number): Observable<GeographicUkr> {

    let params = new HttpParams()
      .set('geographicEngId', geographicEngId);

    return this.httpClient.get<GeographicUkr>(this.REST_API_SERVER + '/geographic/translate', { params: params });
  }
}
