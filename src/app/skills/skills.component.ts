import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <section class="skills">
        <div class="container-fluid">
          <div class="row col-center" id="studies">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInLeft" data-wow-delay="0.2s" data-wow-duration="1.5s">
              <div class="row item-center">
                <img class="small-logo" src="https://github.com/Sileax/CV/blob/master/img/svg/React.svg"/>
              </div>
              <div class="row item-center">
                <div class="cyan-text">REACT.JS</div>
              </div>
              <div class="row padding-canvas item-center">
                <canvas baseChart width="281" height="281"
                        [data]="reactDoughnutChartData"
                        [chartType]="reactDoughnutChartType"
                        [colors]="reactDoughnutChartColors"
                        [options]="reactDoughnutChartOptions"></canvas>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeIn" data-wow-delay="1s" data-wow-duration="2s">
              <div class="row item-center">
                <img class="small-logo" src="https://github.com/Sileax/CV/blob/master/img/svg/angular.svg"/>
              </div>
              <div class="row item-center">
                <div class="red-text">ANGULAR 2/4</div>
              </div>
              <div class="row padding-canvas item-center">
                <canvas baseChart width="281" height="281"
                        [data]="angularDoughnutChartData"
                        [chartType]="angularDoughnutChartType"
                        [colors]="angularDoughnutChartColors"
                        [options]="angularDoughnutChartOptions"></canvas>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="1.5s">
              <div class="row item-center">
                <img class="big-logo" src="https://github.com/Sileax/CV/blob/master/img/svg/Node.js.svg"/>
              </div>
              <div class="row item-center">
                <div class="green-text">NODE.JS</div>
              </div>
              <div class="row padding-canvas item-center">
                <canvas baseChart width="281" height="281"
                        [data]="nodeDoughnutChartData"
                        [chartType]="nodeDoughnutChartType"
                        [colors]="nodeDoughnutChartColors"
                        [options]="nodeDoughnutChartOptions"></canvas>
              </div>
            </div>
          </div>
        </div>
      </section>
  `, styleUrls: ['./skills.component.scss']})
export class SkillsComponent implements OnInit {

  public reactDoughnutChartData : number[] = [80, 20];
  public reactDoughnutChartType : string = 'doughnut';
  public reactDoughnutChartColors : Array < any > = [
    {
      backgroundColor: ['rgba(0,216,255,1)', 'rgba(230,230,230,1)'],
      borderColor: 'rgba(255,255,255,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: 'rgba(0,216,255,1)',
      pointHoverBackgroundColor: 'rgba(0,216,255,1)',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public reactDoughnutChartOptions: any = {
      cutoutPercentage: 85,
      animation: {
        easing: 'easeOutBounce'
      },
      responsive: true,
      events: []
  };

  public angularDoughnutChartData : number[] = [65, 35];
  public angularDoughnutChartType : string = 'doughnut';
  public angularDoughnutChartColors : Array < any > = [
    {
      backgroundColor: ['rgba(221,0,49,1)', 'rgba(230,230,230,1)'],
      borderColor: 'rgba(255,255,255,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: 'rgba(221,0,49,1)',
      pointHoverBackgroundColor: 'rgba(221,0,49,1)',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public angularDoughnutChartOptions: any = {
      cutoutPercentage: 85,
      animation: {
        easing: 'easeOutBounce'
      },
      responsive: true,
      events: []
  };

  public nodeDoughnutChartData : number[] = [90, 10];
  public nodeDoughnutChartType : string = 'doughnut';
  public nodeDoughnutChartColors : Array < any > = [
    {
      backgroundColor: ['rgba(140,200,75,1)', 'rgba(230,230,230,1)'],
      borderColor: 'rgba(255,255,255,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: 'rgba(140,200,75,1)',
      pointHoverBackgroundColor: 'rgba(140,200,75,1)',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public nodeDoughnutChartOptions: any = {
      cutoutPercentage: 85,
      animation: {
        easing: 'easeOutBounce'
      },
      responsive: true,
      events: []
  };


  constructor() {}

  ngOnInit() {}

}
