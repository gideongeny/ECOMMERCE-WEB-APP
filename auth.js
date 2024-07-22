document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;
        
        const user = { name, email, password };
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isLoggedIn', true);
        
        alert('Registration successful!');
        window.location.href = 'products.html';
    });

    
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.email === email && user.password === password) {
            localStorage.setItem('isLoggedIn', true);
            alert('Login successful!');
            window.location.href = 'products.html';
        } else {
            alert('Invalid email or password');
        }
    });

    
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn && window.location.pathname !== '/register.html') {
        window.location.href = 'register.html';
    }


    if (window.location.pathname === '/profile.html') {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            document.getElementById('name').value = user.name;
            document.getElementById('email').value = user.email;
            document.getElementById('address').value = user.address || '';
        }

        const userInfoForm = document.querySelector('#user-info form');
        userInfoForm.addEventListener('submit', (event) => {
            event.preventDefault();
            user.name = document.getElementById('name').value;
            user.email = document.getElementById('email').value;
            user.address = document.getElementById('address').value;
            localStorage.setItem('user', JSON.stringify(user));
            alert('Profile updated successfully!');
        });
    }
});
