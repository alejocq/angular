import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { OtroComponenteComponent } from './otro-componente/otro-componente.component';
import { CardComponent } from './card/card.component';
import { CompDataBindingComponent } from './comp-data-binding/comp-data-binding.component';
import { ContadorComponent } from './comp-data-binding/contador/contador.component';
import { CmpComunicacionEntreCmpsComponent } from './cmp-comunicacion-entre-cmps/cmp-comunicacion-entre-cmps.component';
import { CmpLeiaComponent } from './cmp-comunicacion-entre-cmps/cmp-leia/cmp-leia.component';
import { CmpLukeComponent } from './cmp-comunicacion-entre-cmps/cmp-luke/cmp-luke.component';
import { MiCvComponent } from './mi-cv/mi-cv.component';
import { PreviewCvComponent } from './mi-cv/preview-cv/preview-cv.component';
import { FormCvComponent } from './mi-cv/form-cv/form-cv.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { DoblePipe } from './cmp-pipes/doble.pipe';
import { ReversePipe } from './cmp-pipes/reverse.pipe';
import { CurrencyRightPipe } from './cmp-pipes/currency-right.pipe';
import { HideWordsPipe } from './cmp-pipes/hide-words.pipe';
import { FiltroPipe } from './cmp-pipes/filtro.pipe';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { MarcarDirective } from './cmp-directivas/marcar.directive';
import { BlinkDirective } from './cmp-directivas/blink.directive';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';
import { CmpAComponent } from './cmp-servicios/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-servicios/cmp-b/cmp-b.component';
import { CmpFormulariosComponent } from './cmp-formularios/cmp-formularios.component';
import { CmpRoutingComponent } from './cmp-routing/cmp-routing.component';
import { InicioComponent } from './cmp-routing/inicio/inicio.component';
import { NuevoUsuarioComponent } from './cmp-routing/nuevo-usuario/nuevo-usuario.component';
import { ErrorComponent } from './cmp-routing/error/error.component';
import { UsuariosComponent } from './cmp-routing/usuarios/usuarios.component';
import { InfoUsuarioComponent } from './cmp-routing/usuarios/info-usuario/info-usuario.component';
import { EditarUsuarioComponent } from './cmp-routing/usuarios/editar-usuario/editar-usuario.component';
import { Routing } from './cmp-routing/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    OtroComponenteComponent,
    CardComponent,
    CompDataBindingComponent,
    ContadorComponent,
    CmpComunicacionEntreCmpsComponent,
    CmpLeiaComponent,
    CmpLukeComponent,
    MiCvComponent,
    PreviewCvComponent,
    FormCvComponent,
    CmpPipesComponent,
    DoblePipe,
    ReversePipe,
    CurrencyRightPipe,
    HideWordsPipe,
    FiltroPipe,
    CmpDirectivasComponent,
    MarcarDirective,
    BlinkDirective,
    CmpServiciosComponent,
    CmpAComponent,
    CmpBComponent,
    CmpFormulariosComponent,
    CmpRoutingComponent,
    InicioComponent,
    NuevoUsuarioComponent,
    ErrorComponent,
    UsuariosComponent,
    InfoUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
