import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  constructor() { }

  data: any;
  options: any;

  data2: any;
  options2: any;  

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      
      this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  label: 'My First dataset',
                  backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                  borderColor: documentStyle.getPropertyValue('--blue-500'),
                  data: [65, 59, 80, 81, 56, 55, 40]
              },
              {
                  label: 'My Second dataset',
                  backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                  borderColor: documentStyle.getPropertyValue('--pink-500'),
                  data: [28, 48, 40, 19, 86, 27, 90]
              }
          ]
      };

      this.options = {
          maintainAspectRatio: false,
          aspectRatio: 0.8,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary,
                      font: {
                          weight: 500
                      }
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }

          }
      };


      const documentStyle2 = getComputedStyle(document.documentElement);
      const textColor2 = documentStyle2.getPropertyValue('--text-color');

      this.data2 = {
          labels: ['A', 'B', 'C'],
          datasets: [
              {
                  data: [540, 325, 702],
                  backgroundColor: [documentStyle2.getPropertyValue('--blue-500'), documentStyle2.getPropertyValue('--yellow-500'), documentStyle2.getPropertyValue('--green-500')],
                  hoverBackgroundColor: [documentStyle2.getPropertyValue('--blue-400'), documentStyle2.getPropertyValue('--yellow-400'), documentStyle2.getPropertyValue('--green-400')]
              }
          ]
      };

      this.options2 = {
          plugins: {
              legend: {
                  labels: {
                      usePointStyle: true,
                      color: textColor2
                  }
              }
          }
      };      
  }

}


