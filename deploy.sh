#!/bin/bash

# Конфігурація деплою
SERVER_USER="flowsua"
SERVER_IP="188.40.219.139"
SERVER_PATH="www647.your-server.de"  # Наприклад: /var/www/flowsuite.tech

# Перевірка наявності директорії build
if [ ! -d "build" ]; then
  echo "❌ Директорія build не знайдена. Спочатку виконайте npm run build"
  exit 1
fi

# Деплой файлів на сервер
echo "🚀 Початок деплою на сервер $SERVER_IP..."
rsync -avz --delete build/ $SERVER_USER@$SERVER_IP:$SERVER_PATH

# Перевірка статусу виконання
if [ $? -eq 0 ]; then
  echo "✅ Деплой успішно завершено!"
else
  echo "❌ Виникла помилка під час деплою."
  exit 1
fi