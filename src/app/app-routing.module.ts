import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LogsComponent } from './pages/logs/logs.component';
import { AboutComponent } from './pages/about/about.component';
import { ArticleComponent } from './pages/article/article.component';
import { LoginComponent } from './pages/backstage/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'logs',
    component: LogsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'article/:aid',
    component: ArticleComponent,
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        redirectTo: 'admin/login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
