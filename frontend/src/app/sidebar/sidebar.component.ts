import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fieldsChange(values: any): void {
    if (values.currentTarget.checked) {
      console.log(values.currentTarget.value);
    }
  }
}
