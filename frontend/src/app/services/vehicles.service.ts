import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  public vehiclesData: any = {};

  constructor(
    private http: HttpClient
  ) { }

  public getVehicles(): Observable<any> {
    try {
      this.vehiclesData = this.http.get<any>(`${environment.baseApi}/vehicles`);
      return this.vehiclesData;
    } catch (error) {
      console.log('failed to get data', error);
    }
  }

  public getVehiclesData(): any {
    return this.vehiclesData;
  }
}
