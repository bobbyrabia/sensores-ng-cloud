import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './core/components/notfound/notfound.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import {AuthModule} from "./core/components/auth/auth.module";

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: 'dashboard',
                    component: AppLayoutComponent,
                    children: [

                        {
                            path: 'general',
                            loadChildren: () =>
                                import('./modules/general/general.module').then(
                                    (m) => m.GeneralModule
                                ),
                        },
                        {
                            path: 'node',
                            loadChildren: () =>
                                import(
                                    './modules/sensors/node/node.module'
                                ).then((m) => m.NodeModule),
                        },
                        {
                            path: 'drone',
                            loadChildren: () =>
                                import('./modules/drone/drone.module').then(
                                    (m) => m.DroneModule
                                ),
                        },
                    ],
                },
                {
                    path: '',
                    loadChildren: () =>
                        import('./core/components/auth/auth.module').then(
                            (m) => m.AuthModule
                        ),
                },
                {
                    path: 'landing',
                    loadChildren: () =>
                        import('./core/components/landing/landing.module').then(
                            (m) => m.LandingModule
                        ),
                },
                { path: 'notfound', component: NotfoundComponent },
                { path: '**', redirectTo: '/notfound' },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
