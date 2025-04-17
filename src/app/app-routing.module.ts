import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./home/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: () => import('./Login/tab2.module').then(m => m.Tab2PageModule) },
   {
    path: 'candidates',
    loadChildren: () => import('./candidates/candidates.module').then( m => m.CandidatesPageModule)
  },
  { path: 'register', loadChildren: () => import('./Rigster/tab3.module').then(m => m.Tab3PageModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '**', 
    redirectTo: 'tabs'
  },
  {
    path: 'details-candidate',
    loadChildren: () => import('./details-candidate/details-candidate.module').then( m => m.DetailsCandidatePageModule)
  },
 
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
