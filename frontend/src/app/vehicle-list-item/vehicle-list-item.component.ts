import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-list-item',
  templateUrl: './vehicle-list-item.component.html',
  styleUrls: ['./vehicle-list-item.component.scss']
})
export class VehicleListItemComponent implements OnInit {

  showDetailsCard: boolean = false;
  @Input() vehicle: any;
  constructor() { }

  ngOnInit() {
    console.log('vehicle item list', this.vehicle);
  }

  private launchDetails() {
    this.showDetailsCard = true;
  }

  private closeDetails() {
    this.showDetailsCard = false;
  }
}
