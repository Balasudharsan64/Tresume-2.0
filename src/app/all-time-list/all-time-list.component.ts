import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-time-list',
  templateUrl: './all-time-list.component.html',
  styleUrls: ['./all-time-list.component.scss']
})
export class AllTimeListComponent implements OnInit {
  tableData = [
    {
      From_Date: 'Date1',
      To_Date: 'Date2',
      Total_Hours: '8',
      Created_On: '2023-10-05',
      Status: 'Approved',
      Comments: 'Sample Comment',
    },
    {
      From_Date: 'Date1',
      To_Date: 'Date2',
      Total_Hours: '8',
      Created_On: '2023-10-05',
      Status: 'Approved',
      Comments: 'Sample Comment',
    }
  ];

  showConfirmationDialog: boolean = false;
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  Gotonext() {
    this.router.navigate(['timesheet/create']);
  }
  displayedTimesheets: number = this.tableData.length;
  totalTimesheets: number = this.tableData.length;


  performSearch(searchTerm: string) {
    this.tableData = this.tableData.filter(row =>
      Object.values(row).some(value => value.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    this.displayedTimesheets = this.tableData.length;
  }

}