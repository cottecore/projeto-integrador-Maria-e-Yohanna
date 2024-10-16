import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'etapa1',
    loadChildren: () => import('./apresentacao/etapa1/etapa1.module').then( m => m.Etapa1PageModule)
  },
  {
    path: 'etapa2',
    loadChildren: () => import('./apresentacao/etapa2/etapa2.module').then( m => m.Etapa2PageModule)
  },
  {
    path: 'etapa3',
    loadChildren: () => import('./apresentacao/etapa3/etapa3.module').then( m => m.Etapa3PageModule)
  },
  {
    path: 'apresentacao',
    loadChildren: () => import('./apresentacao/apresentacao.module').then( m => m.ApresentacaoPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'autenticacao',
    loadChildren: () => import('./autenticacao/autenticacao.module').then( m => m.AutenticacaoPageModule)
  },
  {
    path: 'recuperacao',
    loadChildren: () => import('./recuperacao/recuperacao.module').then( m => m.RecuperacaoPageModule)
  },
  {
    path: 'lista-email',
    loadChildren: () => import('./lista-email/lista-email.module').then( m => m.ListaEmailPageModule)
  },
  {
    path: 'cadastro-lampada',
    loadChildren: () => import('./cadastro-lampada/cadastro-lampada.module').then( m => m.CadastroLampadaPageModule)
  },
  {
    path: 'cadastro-lampada/:id',
    loadChildren: () => import('./cadastro-lampada/cadastro-lampada.module').then( m => m.CadastroLampadaPageModule)
  },  

  {
    path: 'lista-lampada',
    loadChildren: () => import('./lista-lampada/lista-lampada.module').then( m => m.ListaLampadaPageModule)
  },
  {
    path: 'listar-lampada',
    loadChildren: () => import('./listar-lampada/listar-lampada.module').then( m => m.ListarLampadaPageModule)
  },
  {
    path: 'demanda',
    loadChildren: () => import('./demanda/demanda.module').then( m => m.DemandaPageModule)
  },
  {
    path: 'cadastro-poste',
    loadChildren: () => import('./cadastro-poste/cadastro-poste.module').then( m => m.CadastroPostePageModule)
  },
  {path: 'cadastro-poste/:id',
    loadChildren: () => import('./cadastro-poste/cadastro-poste.module').then( m => m.CadastroPostePageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'lista-poste',
    loadChildren: () => import('./lista-poste/lista-poste.module').then( m => m.ListaPostePageModule)
  },
  {
    path: 'listar-poste',
    loadChildren: () => import('./listar-poste/listar-poste.module').then( m => m.ListarPostePageModule)
  },
  {
    path: 'listagens',
    loadChildren: () => import('./listagens/listagens.module').then( m => m.ListagensPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'grafico',
    loadChildren: () => import('./grafico/grafico.module').then( m => m.GraficoPageModule)
  },
  {
    path: 'conjunto-grafico',
    loadChildren: () => import('./conjunto-grafico/conjunto-grafico.module').then( m => m.ConjuntoGraficoPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'grafico-lampada',
    loadChildren: () => import('./grafico-lampada/grafico-lampada.module').then( m => m.GraficoLampadaPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'cadastro-comentario',
    loadChildren: () => import('./cadastro-comentario/cadastro-comentario.module').then( m => m.CadastroComentarioPageModule)
  },
  {
    path: 'termos',
    loadChildren: () => import('./termos/termos.module').then( m => m.TermosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
