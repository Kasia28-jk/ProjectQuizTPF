import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainGameWindowComponent } from './main-game-window/main-game-window.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ResultWindowComponent } from './result-window/result-window.component';

const routes: Routes = [
  { path: '', component: RegisterPageComponent},
  { path: 'waitingroom', component: HomePageComponent},
  { path: 'game', component: MainGameWindowComponent},
  { path: 'result', component: ResultWindowComponent},
];

export const routing = RouterModule.forRoot(routes, { enableTracing: true })
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

