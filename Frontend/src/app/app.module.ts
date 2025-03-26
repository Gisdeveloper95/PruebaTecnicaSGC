// Importamos los módulos y componentes necesarios de Angular
import { BrowserModule } from '@angular/platform-browser'; // Proporciona servicios esenciales para navegador
import { NgModule } from '@angular/core'; // Decorador para definir módulos
import { HttpClientModule } from '@angular/common/http'; // Para realizar peticiones HTTP

// Importamos los componentes de nuestra aplicación
import { AppComponent } from './app.component'; // Componente raíz de la aplicación
import { CounterComponent } from './counter/counter.component'; // Nuestro componente de contador

// El decorador @NgModule configura la aplicación Angular
@NgModule({
  // Declaramos los componentes que pertenecen a este módulo
  declarations: [
    AppComponent,     // Componente principal de la aplicación
    CounterComponent  // Componente del contador que creamos
  ],
  // Importamos otros módulos que necesitamos usar
  imports: [
    BrowserModule,    // Servicios básicos para navegador
    HttpClientModule  // IMPORTANTE: Permite realizar peticiones HTTP (sin esto, el servicio no funcionaría)
  ],
  providers: [],      // Aquí iría la lista de servicios (vacía porque usamos providedIn: 'root')
  bootstrap: [AppComponent] // El componente raíz que se inicia al cargar la aplicación
})
export class AppModule { }