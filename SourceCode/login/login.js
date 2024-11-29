function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'admin' && password === '123456') {
        alert('Login successful!');
        errorMessage.style.display = 'none';
    } else {
        errorMessage.textContent = 'Tài khoản hoặc mật khẩu không đúng.';
        errorMessage.style.display = 'block';
    }
}