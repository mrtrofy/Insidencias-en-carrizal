// Configuración de la contraseña maestra para el Admin
const ADMIN_PASSWORD = "admin123";

// Referencias a los elementos del DOM (Ajustados a tu index.html)
const adminForm = document.getElementById('admin-form');
const loginForm = document.getElementById('login-form');
const registroForm = document.getElementById('registro-form');

const authContainer = document.getElementById('auth-container');
const adminSection = document.getElementById('admin-section');
const userSpace = document.getElementById('user-space');
const logoutBtn = document.getElementById('logout-btn');

// Referencias para el intercambio de pestañas
const btnShowLogin = document.getElementById('btn-show-login');
const btnShowRegister = document.getElementById('btn-show-register');
const loginBlock = document.getElementById('login-block');
const registerBlock = document.getElementById('register-block');

/**
 * Lógica para intercambiar entre Iniciar Sesión y Registro
 */
btnShowRegister.addEventListener('click', () => {
    loginBlock.style.display = 'none';
    registerBlock.style.display = 'block';
    btnShowRegister.classList.add('active');
    btnShowLogin.classList.remove('active');
});

btnShowLogin.addEventListener('click', () => {
    registerBlock.style.display = 'none';
    loginBlock.style.display = 'block';
    btnShowLogin.classList.add('active');
    btnShowRegister.classList.remove('active');
});

/**
 * Función para mostrar el espacio de usuario
 */
function mostrarEspacioUsuario() {
    authContainer.style.display = 'none';
    adminSection.style.display = 'none';
    userSpace.style.display = 'block';
}

/**
 * Función para cerrar sesión
 */
function cerrarSesion() {
    authContainer.style.display = 'block';
    adminSection.style.display = 'block';
    userSpace.style.display = 'none';
    
    // Limpiar campos
    document.getElementById('admin-pass').value = '';
    loginForm.reset();
    registroForm.reset();
}

// Evento para el formulario de Administrador
adminForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputPass = document.getElementById('admin-pass').value;
    
    if (inputPass === ADMIN_PASSWORD) {
        mostrarEspacioUsuario();
    } else {
        const errorMsg = document.createElement('p');
        errorMsg.className = 'error-text'; // Usa la clase de tu CSS
        errorMsg.innerText = "Error: Contraseña incorrecta.";
        adminForm.appendChild(errorMsg);
        setTimeout(() => errorMsg.remove(), 3000);
    }
});

// Eventos para login y registro
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    mostrarEspacioUsuario();
});

registroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    mostrarEspacioUsuario();
});

// Evento para cerrar sesión
logoutBtn.addEventListener('click', cerrarSesion);