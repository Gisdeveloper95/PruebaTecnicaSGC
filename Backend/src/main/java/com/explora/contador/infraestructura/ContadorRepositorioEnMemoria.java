package com.explora.contador.infraestructura;

import com.explora.contador.dominio.Contador;
import com.explora.contador.dominio.ContadorRepositorio;
import org.springframework.stereotype.Repository;

// Esta anotación le dice a Spring que esta clase es un repositorio
@Repository
public class ContadorRepositorioEnMemoria implements ContadorRepositorio {
    // Guardamos el contador en memoria
    private final Contador contador;

    // Creamos un nuevo contador cuando se inicia la aplicación
    public ContadorRepositorioEnMemoria() {
        this.contador = new Contador();
    }

    // Implementamos el método para obtener el contador
    @Override
    public Contador obtener() {
        return contador;
    }

    // Implementamos el método para guardar
    // No necesita hacer nada porque ya tenemos el contador en memoria
    @Override
    public void guardar(Contador contador) {
        // No hacemos nada aquí porque ya modificamos el objeto directamente
    }
}