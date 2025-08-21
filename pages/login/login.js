// Inicializar componentes de Materialize
document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
});

// Función principal de login
function createProfessionalLogin() {
    return {
        form: document.getElementById('loginForm'),
        login: handleLogin,
        socialLogin: handleSocialLogin,
        validate: validateLoginForm,
        showError: showError,
        showSuccess: showSuccess,
        reset: resetForm
    };
}

// Manejar envío del formulario tradicional
function handleLogin(event) {
    event.preventDefault();

    if (!validateLoginForm()) {
        showError('Por favor, complete todos los campos correctamente');
        return false;
    }

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Mostrar loading
    showLoading(true);

    // Simular autenticación
    setTimeout(() => {
        // Aquí iría la lógica real de autenticación
        const loginData = {
            email: email,
            password: password,
            rememberMe: rememberMe,
            loginMethod: 'email',
            timestamp: new Date().toISOString()
        };

        console.log('Datos de login:', loginData);

        // Simular respuesta exitosa
        if (email && password.length >= 6) {
            showLoading(false);
            showSuccess('¡Inicio de sesión exitoso! Redirigiendo...');

            // Simular redirección
            setTimeout(() => {
                // window.location.href = '/dashboard';
                M.toast({ html: 'Redirigiendo al dashboard...', classes: 'green' });
            }, 2000);
        } else {
            showLoading(false);
            showError('Credenciales inválidas. Intente nuevamente.');
        }
    }, 2000);

    return loginData;
}

// Login con Google
function loginWithGoogle() {
    showLoading(true);

    // Simular autenticación con Google
    setTimeout(() => {
        const googleData = {
            provider: 'google',
            email: 'usuario@gmail.com',
            name: 'Usuario Demo',
            loginMethod: 'google',
            timestamp: new Date().toISOString()
        };

        console.log('Login con Google:', googleData);
        showLoading(false);
        showSuccess('¡Autenticación con Google exitosa!');

        setTimeout(() => {
            M.toast({ html: 'Bienvenido, ' + googleData.name, classes: 'green' });
        }, 1500);
    }, 1500);
}



// Validar formulario de login
function validateLoginForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        document.getElementById('email').classList.add('invalid');
        isValid = false;
    } else {
        document.getElementById('email').classList.remove('invalid');
        document.getElementById('email').classList.add('valid');
    }

    // Validar contraseña
    if (!password || password.length < 6) {
        document.getElementById('password').classList.add('invalid');
        isValid = false;
    } else {
        document.getElementById('password').classList.remove('invalid');
        document.getElementById('password').classList.add('valid');
    }

    return isValid;
}

// Mostrar loading
function showLoading(show) {
    const loginText = document.querySelector('.login-text');
    const loading = document.querySelector('.loading');
    const submitBtn = document.querySelector('.btn-login');

    if (show) {
        loginText.style.display = 'none';
        loading.style.display = 'inline-block';
        submitBtn.disabled = true;
    } else {
        loginText.style.display = 'inline';
        loading.style.display = 'none';
        submitBtn.disabled = false;
    }
}

// Mostrar mensaje de error
function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');
    const successDiv = document.getElementById('successMessage');

    successDiv.style.display = 'none';
    errorText.textContent = message;
    errorDiv.style.display = 'block';

    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 5000);
}

// Mostrar mensaje de éxito
function showSuccess(message) {
    const successDiv = document.getElementById('successMessage');
    const successText = document.getElementById('successText');
    const errorDiv = document.getElementById('errorMessage');

    errorDiv.style.display = 'none';
    successText.textContent = message;
    successDiv.style.display = 'block';

    setTimeout(() => {
        successDiv.style.display = 'none';
    }, 5000);
}

// Recuperar contraseña
function forgotPassword() {
    M.toast({ html: 'Función de recuperación de contraseña activada', classes: 'blue' });

    // Aquí iría la lógica para recuperar contraseña
    const email = prompt('Ingrese su correo electrónico para recuperar la contraseña:');
    if (email) {
        showSuccess('Se ha enviado un enlace de recuperación a ' + email);
    }
}


// Limpiar formulario
function resetForm() {
    document.getElementById('loginForm').reset();
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('successMessage').style.display = 'none';

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.classList.remove('valid', 'invalid');
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    const loginSystem = createProfessionalLogin();

    // Manejar envío del formulario
    document.getElementById('loginForm').addEventListener('submit', handleLogin);

    // Validación en tiempo real
    document.getElementById('email').addEventListener('blur', function () {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && emailRegex.test(this.value)) {
            this.classList.add('valid');
            this.classList.remove('invalid');
        } else if (this.value) {
            this.classList.add('invalid');
            this.classList.remove('valid');
        }
    });

    document.getElementById('password').addEventListener('blur', function () {
        if (this.value && this.value.length >= 6) {
            this.classList.add('valid');
            this.classList.remove('invalid');
        } else if (this.value) {
            this.classList.add('invalid');
            this.classList.remove('valid');
        }
    });
});