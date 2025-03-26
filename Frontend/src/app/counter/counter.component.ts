// Importamos las clases necesarias de Angular
import { Component, OnInit } from '@angular/core'; // Component para decorar la clase, OnInit para ciclo de vida
import { CounterService } from '../counter.service'; // Nuestro servicio para el contador

// El decorador @Component define las propiedades del componente
@Component({
  selector: 'app-counter',                  // Etiqueta HTML para usar este componente (<app-counter></app-counter>)
  templateUrl: './counter.component.html',  // Plantilla HTML del componente
  styleUrls: ['./counter.component.css']    // Estilos CSS específicos para este componente
})
// Implementamos OnInit para ejecutar código en la inicialización del componente
export class CounterComponent implements OnInit {
  // Propiedades del componente
  counterValue: number = 0;  // Valor actual del contador (inicializado a 0)
  loading: boolean = false;  // Indicador de carga para operaciones asíncronas

  // Inyectamos el servicio del contador mediante el constructor
  constructor(private counterService: CounterService) { }

  /**
   * Método del ciclo de vida que se ejecuta al inicializar el componente
   * Lo usamos para cargar el valor inicial del contador
   */
  ngOnInit(): void {
    this.getValue(); // Cargamos el valor inicial del contador
  }

  /**
   * Obtiene el valor actual del contador desde el backend
   */
  getValue(): void {
    this.loading = true; // Activamos indicador de carga
    // Llamamos al método del servicio y nos suscribimos para recibir la respuesta
    this.counterService.getValue().subscribe({
      // Callback que se ejecuta cuando llega la respuesta exitosa
      next: (value) => {
        this.counterValue = value; // Asignamos el valor recibido
        this.loading = false;      // Desactivamos indicador de carga
      },
      // Callback que se ejecuta si hay un error
      error: (error) => {
        console.error('Error al obtener el valor:', error); // Mostramos error en consola
        this.loading = false; // Desactivamos indicador de carga incluso en caso de error
      }
    });
  }

  /**
   * Incrementa el contador en 1
   */
  increment(): void {
    this.loading = true; // Activamos indicador de carga
    // Llamamos al método de incremento del servicio
    this.counterService.increment().subscribe({
      // Cuando recibimos el nuevo valor
      next: (value) => {
        this.counterValue = value; // Actualizamos la propiedad con el nuevo valor
        this.loading = false;      // Desactivamos indicador de carga
      },
      // Si ocurre un error
      error: (error) => {
        console.error('Error al incrementar:', error);
        this.loading = false; // Aseguramos desactivar el indicador de carga
      }
    });
  }

  /**
   * Decrementa el contador en 1
   */
  decrement(): void {
    this.loading = true; // Activamos indicador de carga
    // Similar a increment pero llamando al método de decremento
    this.counterService.decrement().subscribe({
      next: (value) => {
        this.counterValue = value; // Actualizamos con el valor decrementado
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al decrementar:', error);
        this.loading = false;
      }
    });
  }

  /**
   * Reinicia el contador a 0
   */
  reset(): void {
    this.loading = true; // Activamos indicador de carga
    // Llamamos al método de reinicio
    this.counterService.reset().subscribe({
      next: (value) => {
        this.counterValue = value; // Actualizamos con el valor reiniciado (0)
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al reiniciar:', error);
        this.loading = false;
      }
    });
  }
}