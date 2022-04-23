import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        "path": "",
        "children": [
            {
                path: 'home',
                loadChildren: () => import('src/app/pages/home-page/home-page.module').then(m => m.HomePageModule)
            },
            {
                "path": "",
                "redirectTo": "home",
                "pathMatch": "full"
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
