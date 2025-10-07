const tg = window.Telegram.WebApp;
tg.expand(); // Раскрываем приложение на весь экран

const form = document.getElementById('feedbackForm');

// 3. Обрабатываем отправку формы
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Отключаем стандартное поведение

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  const data = {
    name: name,
    email: email,
    phone: phone,
    message: message,
  };

  // 4. Отправляем данные боту
  tg.sendData(JSON.stringify(data));

  // 5. Закрываем Mini App
  tg.close();
});