# Proyecto de Automatización de Pruebas - TA_4

## Descripción General
Este proyecto implementa una suite de pruebas automatizadas atómicas y escenarios BDD integrados en un pipeline de Integración Continua (CI) con pruebas de performance k6.

## 📋 Requisitos Previos

Para ejecutar este proyecto de automatización en tu máquina local necesitas:

* **Java JDK 8** o superior.
* **Apache Maven 3.8+** (configurado en las variables de entorno).
* **Git** (para el control de versiones).

## Instrucciones de Ejecución
```bash
# Clonar e inicializar proyecto
git clone <url-repositorio>
cd automatizacion

# Compilar y ejecutar pruebas unitarias y BDD
mvn clean test

# Ejecutar prueba de rendimiento
k6 run src/test/performance/login_perf.js
```

## Reportes
Los resultados se generan automáticamente en target/surefire-reports/.
