// Configuración de la contraseña maestra para el Admin
const ADMIN_PASSWORD = "admin123";

// --- REFERENCIAS A ELEMENTOS EXISTENTES EN EL HTML ---
const authContainer = document.getElementById('auth-container');
const adminSection = document.getElementById('admin-section');
const userSpace = document.getElementById('user-space');

const loginForm = document.getElementById('login-form');
const registroForm = document.getElementById('registro-form');
const adminForm = document.getElementById('admin-form');
const logoutBtn = document.getElementById('logout-btn');

// --- REFERENCIAS PARA LAS PESTAÑAS (TABS) ---
const btnShowLogin = document.getElementById('btn-show-login');
const btnShowRegister = document.getElementById('btn-show-register');
const loginBlock = document.getElementById('login-block');
const registerBlock = document.getElementById('register-block');

/**
 * LÓGICA PARA CAMBIAR ENTRE PESTAÑAS
 * Esto es lo que hace que aparezcan los campos de registro
 */
btnShowRegister.addEventListener('click', () => {
    // Muestra el bloque de registro y oculta el de login
    loginBlock.style.display = 'none';
    registerBlock.style.display = 'block';
    
    // Cambia el diseño visual de los botones
    btnShowRegister.classList.add('active');
    btnShowLogin.classList.remove('active');
});

btnShowLogin.addEventListener('click', () => {
    // Muestra el bloque de login y oculta el de registro
    registerBlock.style.display = 'none';
    loginBlock.style.display = 'block';
    
    // Cambia el diseño visual de los botones
    btnShowLogin.classList.add('active');
    btnShowRegister.classList.remove('active');
});

/**
 * FUNCIÓN PARA ENTRAR AL PANEL DE USUARIO
 */
function mostrarEspacioUsuario() {
    authContainer.style.display = 'none';
    adminSection.style.display = 'none';
    userSpace.style.display = 'block';
}

/**
 * FUNCIÓN PARA SALIR
 */
function cerrarSesion() {
    authContainer.style.display = 'block';
    adminSection.style.display = 'block';
    userSpace.style.display = 'none';
    
    // Resetear formularios y volver a la pestaña de login por defecto
    loginForm.reset();
    registroForm.reset();
    document.getElementById('admin-pass').value = '';
    
    // Volver visualmente a la pestaña de inicio de sesión
    loginBlock.style.display = 'block';
    registerBlock.style.display = 'none';
    btnShowLogin.classList.add('active');
    btnShowRegister.classList.remove('active');
}

// --- EVENTOS DE ENVÍO DE FORMULARIOS ---

// Registro
registroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Aquí puedes capturar los datos (Nombre, Apellido, Cédula, Carrizal)
    mostrarEspacioUsuario();
});

// Login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    mostrarEspacioUsuario();
});

// Admin
adminForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputPass = document.getElementById('admin-pass').value;
    
    if (inputPass === ADMIN_PASSWORD) {
        mostrarEspacioUsuario();
    } else {
        const errorMsg = document.createElement('p');
        errorMsg.className = 'error-text';
        errorMsg.innerText = "Error: Contraseña incorrecta.";
        adminForm.appendChild(errorMsg);
        setTimeout(() => errorMsg.remove(), 3000);
    }
});

// Cerrar sesión
logoutBtn.addEventListener('click', cerrarSesion);