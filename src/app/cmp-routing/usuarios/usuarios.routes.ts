import { Routes } from '@angular/router';
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { InfoUsuarioGuard } from './info-usuario/info-usuario.guard';
import { EditarUsuarioGuard } from './editar-usuario/editar-usuario.guard';

export const USUARIOS_ROUTES: Routes = [
    { path: ':id/info', component: InfoUsuarioComponent, canActivate: [InfoUsuarioGuard]},
    { path: ':id/editar', component: EditarUsuarioComponent, canDeactivate: [EditarUsuarioGuard]},
]