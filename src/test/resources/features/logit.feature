# language: es
Característica: Autenticación de usuario en la plataforma

  Antecedentes:
    Dado que el usuario se encuentra en la página de inicio de sesión

  Escenario: Inicio de sesión exitoso con credenciales válidas
    Cuando el usuario ingresa el usuario "admin" y la contraseña "clave123"
    Y hace clic en el botón de ingresar
    Entonces el sistema debe redirigir al panel principal
    Y mostrar el mensaje de bienvenida "Bienvenido, admin"

  Esquema del escenario: Intentos de inicio de sesión fallidos
    Cuando el usuario ingresa el usuario "<usuario>" y la contraseña "<password>"
    Y hace clic en el botón de ingresar
    Entonces el sistema debe mostrar el mensaje de error "<mensaje>"

    Ejemplos:
      | usuario | password | mensaje                  |
      | admin   | errada   | Credenciales inválidas   |
      | invalido| clave123 | Usuario no registrado    |
      |         | clave123 | El usuario es requerido  |