import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/nav.service';
import { GlobalEventsManagerService } from '../global-events-manager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private nav:NavService, private globalEventsManager: GlobalEventsManagerService) { }
//bar chart
chartOptions = {
  responsive: true,
  colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
};

chartData = [
  { data: [8, 12, 10, 9], label: 'Passed' },
  { data: [0,4,7,6,6], label: 'Failed' },    
];

chartLabels = ['Application1', 'Application2', 'Application3', 'Application4'];

onChartClick(event) {
  console.log(event);
}

colors = [
  { // 1st Year.
    backgroundColor: '#45b7cd'
  },
  { // 2nd Year.
    backgroundColor: '#ff6384'
  }
]

// pie chart
public pieChartLabels:string[] = ['Failed', 'Passed', 'Invalid','skipped'];
public pieChartData:number[] = [5, 15, 2,1];
public pieChartType:string = 'pie';
 
  ngOnInit() {
    // this.nav.show()
    this.globalEventsManager.showNavBar(true);
    }

}
