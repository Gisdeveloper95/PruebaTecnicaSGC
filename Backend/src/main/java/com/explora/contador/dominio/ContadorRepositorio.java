package com.explora.contador.dominio;

// Interfaz que define cómo guardar y obtener el contador
public interface ContadorRepositorio {
    // Método para obtener el contador
    Contador obtener();

    // Método para guardar el contador
    void guardar(Contador contador);
}