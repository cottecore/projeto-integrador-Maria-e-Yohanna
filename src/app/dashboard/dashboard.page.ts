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

  //data2: any;
  //options2: any;  

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      
      this.data = {
          labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
          datasets: [
              {
                  label: 'Demanda de instalações de poste',
                  backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                  borderColor: documentStyle.getPropertyValue('--blue-500'),
                  data: [57, 49, 12, 60, 89, 76, 33, 60, 98, 37, 87, 54]
              },
              {
                  label: 'Demanda de reparos de lâmpadas',
                  backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                  borderColor: documentStyle.getPropertyValue('--pink-500'),
                  data: [50, 25, 65, 48, 23, 87, 42, 45, 88, 63, 97, 34]
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


      //const documentStyle2 = getComputedStyle(document.documentElement);
      //const textColor2 = documentStyle2.getPropertyValue('--text-color');

      //this.data2 = {
          //labels: ['A', 'B', 'C'],
          //datasets: [
              //{
                  //data: [540, 325, 702],
                  //backgroundColor: [documentStyle2.getPropertyValue('--blue-500'), documentStyle2.getPropertyValue('--yellow-500'), documentStyle2.getPropertyValue('--green-500')],
                  //hoverBackgroundColor: [documentStyle2.getPropertyValue('--blue-400'), documentStyle2.getPropertyValue('--yellow-400'), documentStyle2.getPropertyValue('--green-400')]
              //}
          //]
      //};

      //this.options2 = {
          //plugins: {
              //legend: {
                  //labels: {
                      //usePointStyle: true,
                     // color: textColor2
                 // }
             // }
         // }
     // };      
  }


  go(rota:string){
    window.location.href = rota;
  }  

}


