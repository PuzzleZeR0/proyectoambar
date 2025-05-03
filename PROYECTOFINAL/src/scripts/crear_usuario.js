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
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validación básica
    if (!email.includes('@') || !email.includes('.')) {
        alert('Por favor ingresa un correo electrónico válido');
        return;
    }

    // Enviar datos al servidor
    fetch('/crear-usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Cuenta creada exitosamente');
            window.location.href = '/login.html'; // Redirigir a la página de login
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});