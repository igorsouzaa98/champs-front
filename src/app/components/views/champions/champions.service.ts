import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Champions} from "./champions.model";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAllByRole(id_cat: String): Observable<Champions[]>{
    const url =`${this.baseUrl}/champions?role=${id_cat}`
    return this.http.get<Champions[]>(url);
  }
  findById(id:String):Observable<Champions>{
    const url =`${this.baseUrl}/champions/${id}`
    return this.http.get<Champions>(url);
  }
  update(champions: Champions):Observable<Champions>{
    const url =`${this.baseUrl}/champions/${champions.id}`
    return this.http.put<Champions>(url, champions);
  }
  delete(id: String):Observable<void>{
    const url = `${this.baseUrl}/champions/${id}`
    return this.http.delete<void>(url);
  }

  create(champions: Champions, id_cat: String): Observable<Champions>{
    const url =`${this.baseUrl}/champions?role=${id_cat}`
    return this.http.post<Champions>(url, champions);
  }
  mensagem(str:String):void{
    this._snack.open(`${str}`, 'OK',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
