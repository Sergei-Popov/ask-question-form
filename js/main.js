const tg = window.Telegram.WebApp;
tg.expand();

const form = document.getElementById('feedbackForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const data = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    // --- ИЗМЕНЕНИЕ ЗДЕСЬ ---
    // Вместо tg.sendData() используем fetch для отправки на наш сервер
    fetch('https://fdd9064db157.ngrok-free.app/submit', { // <-- ЗАМЕНИТЕ НА URL ВАШЕГО СЕРВЕРА
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.ok) {
            // Если сервер ответил успешно, закрываем приложение
            tg.close();
        } else {
            // Можно показать ошибку, если что-то пошло не так
            alert('Произошла ошибка при отправке.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('Сетевая ошибка.');
    });
});
