import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LogsComponent } from './pages/logs/logs.component';
import { AboutComponent } from './pages/about/about.component';
import { ArticleComponent } from './pages/article/article.component';
import { LoginComponent } from './pages/backstage/login/login.component';
import { IndexComponent as BackStageIndexComponent } from './pages/backstage/index/index.component';
import { StatisticComponent } from './pages/backstage/statistic/statistic.component';
import { ManageComponent } from './pages/backstage/article/manage/manage.component';
import { WriteComponent } from './pages/backstage/article/write/write.component';
import { TagsComponent } from './pages/backstage/article/tags/tags.component';

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
    component: BackStageIndexComponent,
    children: [
      {
        path: '',
        component: StatisticComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'article',
        component: ManageComponent,
      },
      {
        path: 'article/write',
        component: WriteComponent,
      },
      {
        path: 'article/tags',
        component: TagsComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
