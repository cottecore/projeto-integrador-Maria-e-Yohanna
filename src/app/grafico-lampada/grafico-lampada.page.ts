import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-grafico-lampada',
  templateUrl: './grafico-lampada.page.html',
  styleUrls: ['./grafico-lampada.page.scss'],
 
})
export class GraficoLampadaPage implements OnInit {
  data: any;
 options: any;
  constructor() { }

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data = {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            datasets: [
                {
                    type: 'bar',
                    label: 'LED',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [50, 25, 12, 48, 90, 76, 42, 60, 98, 37, 87, 54]
                },
                {
                    type: 'bar',
                    label: 'Fluorescente',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: [21, 84, 24, 75, 37, 65, 34, 50, 76, 65, 28, 72]
                },
                {
                    type: 'bar',
                    label: 'Incandescente',
                    backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
                    data: [41, 52, 24, 74, 23, 21, 32, 40, 57, 88, 42, 66]
                },
                {
                    type: 'bar',
                    label: 'Halogênio',
                    backgroundColor: documentStyle.getPropertyValue('--purple-500'),
                    data: [30, 55, 70, 58, 59, 84, 62, 78, 55, 98, 43, 59]
                },
                {
                    type: 'bar',
                    label: 'Filamento',
                    backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                    data: [30, 55, 80, 20, 59, 23, 32, 38, 67, 23, 76, 68]
                },
                {
                    type: 'bar',
                    label: 'Inteligente',
                    backgroundColor: documentStyle.getPropertyValue('--red-500'),
                    data: [30, 55, 50, 80, 59, 86, 92, 25, 88, 29, 11, 37]
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

  

