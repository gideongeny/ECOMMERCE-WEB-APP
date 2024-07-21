document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;

        const user = { name, email, password };
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isLoggedIn', true);
        alert('Registration successful!');
        window.location.href = 'profile.html';
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.email === email && user.password === password) {
            localStorage.setItem('isLoggedIn', true);
            alert('Login successful!');
            window.location.href = 'profile.html';
        } else {
            alert('Invalid email or password!');
        }
    });
});
