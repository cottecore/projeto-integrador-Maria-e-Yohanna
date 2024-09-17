import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.page.html',
  styleUrls: ['./grafico.page.scss'],
  
})
export class GraficoPage implements OnInit {
public data2: any;
  public data: any;
  public options: any;
  constructor() { }

  ngOnInit() {
    this.data2 = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [540, 325, 702]
        }
      ]
    };

    //outro//
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                type: 'bar',
                label: 'Dataset 1',
                backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                data: [50, 25, 12, 48, 90, 76, 42]
            },
            {
                type: 'bar',
                label: 'Dataset 2',
                backgroundColor: documentStyle.getPropertyValue('--green-500'),
                data: [21, 84, 24, 75, 37, 65, 34]
            },
            {
                type: 'bar',
                label: 'Dataset 3',
                backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
                data: [41, 52, 24, 74, 23, 21, 32]
            }
        ]
    };

    this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            tooltip: {
                mode: 'index',
                intersect: false
            },
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            y: {
                stacked: true,
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

    }

    go(rota:string){
        window.location.href = rota;
      }  
    

}
