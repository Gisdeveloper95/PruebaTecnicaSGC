// Importamos las clases necesarias de Angular
import { Injectable } from '@angular/core'; // Para hacer que este servicio sea inyectable
import { HttpClient } from '@angular/common/http'; // Para realizar peticiones HTTP
import { Observable } from 'rxjs'; // Para manejar respuestas asíncronas

// El decorador @Injectable marca esta clase como un servicio que puede ser inyectado en otros componentes
// providedIn: 'root' significa que está disponible en toda la aplicación
@Injectable({
  providedIn: 'root'
})
export class CounterService {
  // URL base de la API del contador en el backend, el puerto 8080 es el que definimos en el backend en aplication.properties
  private apiUrl = 'http://localhost:8080/counter';

  // Inyectamos el HttpClient mediante el constructor
  // Esto nos permite realizar peticiones HTTP a nuestro backend
  constructor(private http: HttpClient) { }

  /**
   * Obtiene el valor actual del contador desde el backend.
   * @returns Un Observable que emitira el valor numerico del contador cuando llegue la respuesta
   */
  getValue(): Observable<number> {
    // Realizamos una petición GET al endpoint base
    return this.http.get<number>(this.apiUrl);
  }

  /**
   * Incrementa el valor del contador en el backend.
   * @returns Un Observable que emitirá el nuevo valor del contador tras incrementarlo
   */
  increment(): Observable<number> {
    // Realizamos una petición POST al endpoint de incremento
    // El objeto vacío {} es el cuerpo de la petición (requerido por http.post)
    return this.http.post<number>(`${this.apiUrl}/increment`, {});
  }

  /**
   * Decrementa el valor del contador en el backend.
   * @returns Un Observable que emitirá el nuevo valor del contador tras decrementarlo
   */
  decrement(): Observable<number> {
    // Similar a increment pero usando el endpoint de decremento
    return this.http.post<number>(`${this.apiUrl}/decrement`, {});
  }

  /**
   * Reinicia el contador a cero en el backend.
   * @returns Un Observable que emitirá el valor reiniciado (cero)
   */
  reset(): Observable<number> {
    // Llamamos al endpoint de reinicio
    return this.http.post<number>(`${this.apiUrl}/reset`, {});
  }
}