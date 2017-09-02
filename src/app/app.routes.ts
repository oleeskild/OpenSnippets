import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { EditorComponent } from "./components/editor/editor.component";

const routes: Routes = [{
    component: EditorComponent,
    path: '',
  },
  {
    component: HomeComponent,
    path: 'foo',
  },
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
