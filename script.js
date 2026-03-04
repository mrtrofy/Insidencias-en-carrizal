const ADMIN_PASSWORD = "admin123";

const authContainer = document.getElementById('auth-container');
const adminSection = document.getElementById('admin-section');
const userSpace = document.getElementById('user-space');
const loginForm = document.getElementById('login-form');
const adminForm = document.getElementById('admin-form');
const logoutBtn = document.getElementById('logout-btn');

function mostrarEspacioUsuario() {
    authContainer.style.display = 'none';
    adminSection.style.display = 'none';
    userSpace.style.display = 'block';
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    mostrarEspacioUsuario();
});

adminForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pass = document.getElementById('admin-pass').value;
    if (pass === ADMIN_PASSWORD) {
        mostrarEspacioUsuario();
    } else {
        alert("Contraseña de administrador incorrecta");
    }
});

logoutBtn.addEventListener('click', () => {
    window.location.reload(); // Recarga la página para resetear todo
});