import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Roles} from "./roles.model";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll():Observable<Roles[]>{
    const url =`${this.baseUrl}/roles`
    return this.http.get<Roles[]>(url);
  }
}
