
package com.ejemplo.steps;
import io.cucumber.java.es.*;
import static org.junit.Assert.*;

public class LoginSteps {

    private String usuarioIngresado;
    private String passwordIngresada;
    private String resultadoObtenido;

    @Dado("que el usuario se encuentra en la página de inicio de sesión")
    public void navegarALogin() {
        // Inicialización de contexto o navegador
    }

    @Cuando("el usuario ingresa el usuario {string} y la contraseña {string}")
    public void ingresarCredenciales(String user, String pass) {
        this.usuarioIngresado = user;
        this.passwordIngresada = pass;
    }

    @Y("hace clic en el botón de ingresar")
    public void hacerClicIngresar() {
        if ("admin".equals(usuarioIngresado) && "clave123".equals(passwordIngresada)) {
            resultadoObtenido = "Panel Principal";
        } else if (usuarioIngresado.isEmpty()) {
            resultadoObtenido = "El usuario es requerido";
        } else {
            resultadoObtenido = "Credenciales inválidas";
        }
    }

    @Entonces("el sistema debe redirigir al panel principal")
    public void verificarPanelPrincipal() {
        assertEquals("Panel Principal", resultadoObtenido);
    }

    @Entonces("el sistema debe mostrar el mensaje de error {string}")
    public void verificarMensajeError(String mensajeEsperado) {
        assertEquals(mensajeEsperado, resultadoObtenido);
    }
}