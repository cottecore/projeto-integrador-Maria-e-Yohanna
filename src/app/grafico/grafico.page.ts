import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.page.html',
  styleUrls: ['./grafico.page.scss'],
  
})
export class GraficoPage implements OnInit {
public data2: any;
  public data: any;
  public options: any;
  public labels_tipo_poste:Array<string> = [];
  public data_tipo_poste:Array<string> = [];
  constructor(
    public rs:RequisicaoService
  ) { }

  ngOnInit() {
    this.rs.get({
        controller:'grafico-tipo-poste'
    })
    .subscribe(
        (_res:any) => {
            _res.forEach((e:any) => {
                this.labels_tipo_poste.push('Poste de ' + e.descricao);
                this.data_tipo_poste.push(e.quantidade);

                this.data2 = {
                    labels: this.labels_tipo_poste,
                    datasets: [
                      {
                        data: this.data_tipo_poste
                      }
                    ]
                  };                
            });
        }
    );

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
