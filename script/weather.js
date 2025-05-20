const apiKey = API_KEY; // Укажите свой API-ключ OpenWeatherMap
const city = "Moscow";

const fetchWeather = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Вы не авторизованы! Перенаправляем на страницу входа.");
    window.location.href = "index.html";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`
    );
    const data = await response.json();

    if (response.ok) {
      displayWeather(data);
    } else {
      document.getElementById("weather-info").innerHTML =
        "<p>Ошибка загрузки данных о погоде!</p>";
    }
  } catch (error) {
    console.error("Ошибка запроса:", error);
    document.getElementById("weather-info").innerHTML =
      "<p>Ошибка подключения к сервису погоды.</p>";
  }
};

const displayWeather = (data) => {
  const weatherContainer = document.getElementById("weather-info");
  weatherContainer.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Иконка погоды">
        <div>
            <p><strong>Температура:</strong> ${data.main.temp}°C</p>
            <p><strong>Погодные условия:</strong> ${data.weather[0].description}</p>
            <p><strong>Скорость ветра:</strong> ${data.wind.speed} м/с</p>
        </div>
    `;
};

// Запускаем функцию получения данных при загрузке страницы
window.onload = fetchWeather;

// Функция выхода
const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "index.html";
};
