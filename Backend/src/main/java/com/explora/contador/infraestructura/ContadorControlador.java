package com.explora.contador.infraestructura;

import com.explora.contador.aplicacion.ServicioContador;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// Esta clase maneja las peticiones HTTP
@RestController
// Todos los endpoints empiezan con /counter
@RequestMapping("/counter")
// Permite que el frontend acceda a la API
@CrossOrigin(origins = "*")
public class ContadorControlador {
    // Usamos el servicio para trabajar con el contador
    private final ServicioContador servicio;

    // Spring inyecta automáticamente el servicio aquí
    @Autowired
    public ContadorControlador(ServicioContador servicio) {
        this.servicio = servicio;
    }

    // Endpoint GET para obtener el valor del contador
    @GetMapping
    public ResponseEntity<Integer> obtenerValor() {
        // Devolvemos el valor del contador con estado 200 OK
        return ResponseEntity.ok(servicio.obtenerValor());
    }

    // Endpoint POST para incrementar el contador
    @PostMapping("/increment")
    public ResponseEntity<Integer> incrementar() {
        servicio.incrementar();
        // Devolvemos el nuevo valor después de incrementar
        return ResponseEntity.ok(servicio.obtenerValor());
    }

    // Endpoint POST para decrementar el contador
    @PostMapping("/decrement")
    public ResponseEntity<Integer> decrementar() {
        servicio.decrementar();
        // Devolvemos el nuevo valor después de decrementar
        return ResponseEntity.ok(servicio.obtenerValor());
    }

    // Endpoint POST para reiniciar el contador
    @PostMapping("/reset")
    public ResponseEntity<Integer> reiniciar() {
        servicio.reiniciar();
        // Devolvemos el valor después de reiniciar (siempre será 0)
        return ResponseEntity.ok(servicio.obtenerValor());
    }
}