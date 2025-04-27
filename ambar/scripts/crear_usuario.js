document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const icon = this;
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('bxs-lock');
        icon.classList.add('bxs-lock-open');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('bxs-lock-open');
        icon.classList.add('bxs-lock');
    }
});

// Validación básica del formulario
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    
    // Validación simple de email
    if (!email.includes('@') || !email.includes('.')) {
        alert('Por favor ingresa un correo electrónico válido');
        return;
    }
    
    alert('Cuenta creada exitosamente (simulación)');
});