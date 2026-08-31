# Proyecto de Automatización de Pruebas - TA_4
## Descripción General
Este proyecto implementa una suite de pruebas automatizadas atómicas y escenarios BDD integrados en un pipeline de Integración Continua (CI) con pruebas de performance k6.
## 📋 Requisitos Previos
Para ejecutar este proyecto de automatización en tu máquina local necesitas:
* **Java JDK 8** o superior.
* **Apache Maven 3.8+** (configurado en las variables de entorno).
* **Git** (para el control de versiones).
* **k6** (opcional, para ejecutar las pruebas de carga de forma local).
## Instrucciones de Ejecución
```bash
# Clonar e inicializar proyecto
git clone <url-repositorio>
cd automatizacion
# Compilar y ejecutar pruebas unitarias y BDD
mvn clean test
# Ejecutar prueba de rendimiento
k6 run src/test/performance/login_perf.js
## 📁 Estructura del Proyecto
El proyecto sigue la convención estándar de Maven:
```text
automatizacion/
├── .github/
│   └── workflows/
│       └── ci.yml                  # Definición del Pipeline de GitHub Actions
├── src/
│   ├── main/java/                  # Código fuente de la aplicación
│   └── test/
│       ├── java/
│       │   └── com/ejemplo/
│       │       ├── SumaTest.java   # Pruebas unitarias con JUnit
│       │       └── steps/
│       │           └── LoginSteps.java # Step Definitions (BDD - Cucumber)
│       └── resources/
│           ├── features/
│           │   └── login.feature   # Escenarios BDD en sintaxis Gherkin
│           └── performance/
│               └── performance_test.js # Script de pruebas de carga con k6
├── pom.xml                         # Gestión de dependencias y plugins Maven
└── README.md                       # Documentación principal del proyecto
## Reportes
Los resultados se generan automáticamente en target/surefire-reports/.
