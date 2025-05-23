# Weather App – Приложение для прогноза погоды

## Описание проекта

Это простое веб-приложение, которое позволяет авторизованному пользователю увидеть прогноз погоды в Москве на текущий день.

## Функциональность

- **Авторизация пользователя** через публичное API [ReqRes.in](https://reqres.in).
- **Запрос данных о погоде** с использованием API [OpenWeatherMap](https://openweathermap.org/api).
- **Отображение погоды**: температура, погодные условия, скорость ветра.
- **Адаптивный интерфейс** для мобильных устройств.

## Установка и запуск

### 1. **Клонирование проекта**

```bash
git clone https://github.com/asrbacr/hh-vibe-coding.git
cd hh-vibe-coding
```

### 2. Запуск локального сервера

Для локального тестирования можно использовать `Live Server`.

## Структура проекта

```
/weather-app
    │── index.html         # Страница авторизации
    │── weather.html       # Страница с прогнозом погоды
    │── styles.css         # Стили приложения
    │── script.js          # Логика авторизации
    │── weather.js         # Запрос и обработка данных о погоде
    │── assets/
    │   └── icons/         # Иконки погоды (если нужно)
    │── README.md          # Документация
```

## Используемые технологии

HTML, CSS – структура и стилизация интерфейса.

JavaScript (Fetch API) – запросы к сервисам ReqRes и OpenWeatherMap.

localStorage – сохранение токена авторизации.

## API-ключ

Для работы с OpenWeatherMap необходимо получить API-ключ:

1. Зарегистрируйтесь на OpenWeatherMap.
2. Получите API-ключ.
3. Вставьте его в weather.js вместо ВАШ*API*КЛЮЧ.

## Тестовые данные

```
{
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}
```

## Авторы

- Тестовое задание [по вакансии](https://yaroslavl.hh.ru/vacancy/120663001)
- Реализация [Vibe Coding](https://copilot.microsoft.com/)
- ну и [Я](https://asrbacr.github.io)
