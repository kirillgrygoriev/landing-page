# Flowsuite - No-code та AI автоматизації

Офіційний веб-сайт для курсу з No-code та AI автоматизації. Проект включає головну сторінку сайту та окремий лендінг для курсу.

## Структура проекту
flowsuite/
├── components/            # Компоненти головної сторінки
├── nocode-ai/             # Секція курсу No-code та AI автоматизації
│   ├── assets/            # Зображення та ресурси курсу
│   ├── components/        # React компоненти лендінгу курсу
│   ├── styles/            # CSS стилі для лендінгу курсу
│   ├── app.js             # Головний JS файл для лендінгу курсу
│   ├── index.html         # Головна сторінка лендінгу курсу
│   └── thank-you.html     # Сторінка подяки після оплати
├── styles/                # Загальні CSS стилі
├── assets/                # Зображення, іконки та інші ресурси
├── index.html             # Головна сторінка сайту
├── main-app.js            # Головний JS файл для основного сайту
├── privacy-policy.html    # Сторінка політики конфіденційності
├── terms-of-service.html  # Сторінка умов використання
└── .gitignore             # Файли, які слід ігнорувати в Git

## Технології

- HTML5, CSS3, JavaScript
- React (через CDN, без збірки)
- TailwindCSS (через CDN)
- Font Awesome для іконок
- Babel для трансформації JSX

## Розробка

### Вимоги

- Встановлений Git
- Редактор коду (рекомендується VS Code з розширенням Live Server)
- Сучасний браузер для тестування

### Локальне налаштування проекту

1. Клонуйте репозиторій:
   git clone https://github.com/your-username/flowsuite.git
   cd flowsuite

2. Відкрийте проект у VS Code:
   code .

3. Запустіть Live Server (правий клік на index.html -> "Open with Live Server")

### Процес розробки

1. Створіть нову гілку для ваших змін:
    git checkout -b feature/your-feature-name

2. Внесіть зміни та протестуйте їх локально через Live Server

3. Зафіксуйте ваші зміни:
    git add .
    git commit -m "Детальний опис внесених змін"
    git push origin feature/your-feature-name

4. Створіть Pull Request до гілки develop в GitHub

## Деплой

### Підготовка до деплою

1. Встановіть необхідні інструменти:
    npm install --save-dev terser imagemin-cli clean-css-cli

2. Запустіть скрипт збірки:
    npm run build

3. Цей скрипт створить папку build/ з оптимізованою версією сайту

### Ручний деплой (якщо потрібно)

1. Завантажте вміст папки build/ на хостинг через FTP

2. Переконайтеся, що всі файли коректно завантажені

### Автоматичний деплой через GitHub Actions
Налаштований автоматичний деплой при пуші в гілку main:

1. Об'єднайте зміни з develop в main:
    git checkout main
    git merge develop
    git push origin main

2. GitHub Action автоматично запустить процес збірки та деплою

## Підтримка
Для питань або пропозицій, будь ласка, створіть Issue в репозиторії або зв'яжіться за адресою: kirill.grygoriev@gmail.com