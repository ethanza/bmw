import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../services/vehicles.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  vehiclesData: any = {};
  constructor(
    private vehiclesService: VehiclesService
  ) { }

  ngOnInit() {

    this.vehiclesService.getVehicles().subscribe((vehicles: any) => {
      this.vehiclesData = vehicles;
      console.log(this.vehiclesData);
    });
  }

}
