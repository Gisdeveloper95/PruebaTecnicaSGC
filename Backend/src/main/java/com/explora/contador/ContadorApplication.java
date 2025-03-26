package com.explora.contador;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// Esta anotación configura automáticamente Spring Boot
@SpringBootApplication
public class ContadorApplication {
    // Método principal que inicia nuestra aplicación
    public static void main(String[] args) {
        SpringApplication.run(ContadorApplication.class, args);
    }
}
