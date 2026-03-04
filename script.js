// Configuración de la contraseña maestra para el Admin
const ADMIN_PASSWORD = "admin123";

// Referencias a los elementos del DOM
const adminForm = document.getElementById('admin-form');
const loginForm = document.getElementById('login-form');
const registroForm = document.getElementById('registro-form');

const adminSection = document.getElementById('admin-section');
const loginSection = document.getElementById('login-section');
const registroSection = document.getElementById('registro-section');
const userSpace = document.getElementById('user-space');
const logoutBtn = document.getElementById('logout-btn');

/**
 * Función para mostrar el espacio de usuario y ocultar el resto
 */
function mostrarEspacioUsuario() {
    adminSection.style.display = 'none';
    loginSection.style.display = 'none';
    registroSection.style.display = 'none';
    userSpace.style.display = 'block';
}

/**
 * Función para cerrar sesión y volver al estado inicial
 */
function cerrarSesion() {
    adminSection.style.display = 'block';
    loginSection.style.display = 'block';
    registroSection.style.display = 'block';
    userSpace.style.display = 'none';
    
    // Limpiar campos de contraseña
    document.getElementById('admin-pass').value = '';
}

// Evento para el formulario de Administrador
adminForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que la página se recargue
    
    const inputPass = document.getElementById('admin-pass').value;
    
    if (inputPass === ADMIN_PASSWORD) {
        mostrarEspacioUsuario();
        console.log("Acceso concedido como administrador.");
    } else {
        // En lugar de alert(), usamos un mensaje en consola o podrías añadir un texto en el HTML
        console.error("Contraseña incorrecta.");
        const errorMsg = document.createElement('p');
        errorMsg.style.color = 'red';
        errorMsg.innerText = "Error: Contraseña de administrador incorrecta.";
        adminForm.appendChild(errorMsg);
        
        // Eliminar el mensaje después de 3 segundos
        setTimeout(() => errorMsg.remove(), 3000);
    }
});

// Eventos para simular login y registro estándar
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    mostrarEspacioUsuario();
});

registroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    mostrarEspacioUsuario();
});

// Evento para el botón de cerrar sesión
logoutBtn.addEventListener('click', cerrarSesion);