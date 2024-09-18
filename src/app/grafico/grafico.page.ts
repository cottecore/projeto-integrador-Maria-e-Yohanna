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
      labels: ['Poste de metal', 'Poste de madeira', 'Poste de concreto'],
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
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
            {
                type: 'bar',
                label: 'Poste de metal',
                backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                data: [50, 25, 12, 48, 90, 76, 42, 60, 98, 37, 87, 54]
            },
            {
                type: 'bar',
                label: 'Poste de madeira',
                backgroundColor: documentStyle.getPropertyValue('--green-500'),
                data: [41, 52, 24, 74, 23, 21, 32, 40, 57, 88, 42, 66]
            },
            {
                type: 'bar',
                label: 'Poste de concreto',
                backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
                data: [30, 55, 70, 58, 59, 84, 62, 78, 55, 98, 43, 59]
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
