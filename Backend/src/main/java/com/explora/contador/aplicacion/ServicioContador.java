package com.explora.contador.aplicacion;

import com.explora.contador.dominio.Contador;
import com.explora.contador.dominio.ContadorRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// Esta anotación le dice a Spring que esta clase es un servicio
@Service
public class ServicioContador {
    // Usamos el repositorio para guardar y obtener el contador
    private final ContadorRepositorio repositorio;

    // Spring inyecta automáticamente el repositorio aquí
    @Autowired
    public ServicioContador(ContadorRepositorio repositorio) {
        this.repositorio = repositorio;
    }

    // Método para obtener el valor actual del contador
    public Integer obtenerValor() {
        return repositorio.obtener().getValor();
    }

    // Método para incrementar el contador
    public void incrementar() {
        Contador contador = repositorio.obtener();
        contador.incrementar();
        repositorio.guardar(contador);
    }

    // Método para decrementar el contador
    public void decrementar() {
        Contador contador = repositorio.obtener();
        contador.decrementar();
        repositorio.guardar(contador);
    }

    // Método para reiniciar el contador
    public void reiniciar() {
        Contador contador = repositorio.obtener();
        contador.reiniciar();
        repositorio.guardar(contador);
    }
}