package com.explora.contador.dominio;

// Esta clase representa nuestro contador
public class Contador {
    // Aquí guardamos el valor del contador
    private Integer valor;

    // Constructor que inicializa el contador en 0
    public Contador() {
        this.valor = 0;
    }

    // Método para obtener el valor actual
    public Integer getValor() {
        return valor;
    }

    // Método para aumentar el contador en 1
    public void incrementar() {
        this.valor++;
    }

    // Método para disminuir el contador en 1
    public void decrementar() {
        this.valor--;
    }

    // Método para volver a 0
    public void reiniciar() {
        this.valor = 0;
    }
}