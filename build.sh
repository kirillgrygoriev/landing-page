#!/bin/bash

# Створення директорії для збірки
echo "🚀 Початок процесу збірки..."
rm -rf build
mkdir -p build
mkdir -p build/assets
mkdir -p build/styles
mkdir -p build/components
mkdir -p build/nocode-ai
mkdir -p build/nocode-ai/assets
mkdir -p build/nocode-ai/components
mkdir -p build/nocode-ai/styles

# Копіювання HTML файлів
echo "📄 Копіювання HTML файлів..."
cp *.html build/
cp nocode-ai/*.html build/nocode-ai/

# Мініфікація CSS
echo "🎨 Мініфікація CSS файлів..."
npx clean-css-cli styles/global.css -o build/styles/global.css
npx clean-css-cli nocode-ai/styles/global.css -o build/nocode-ai/styles/global.css

# Мініфікація JavaScript
echo "📜 Транспіляція та мініфікація JavaScript файлів..."

# Transpile and minify main-app.js
npx babel main-app.js --out-file build/main-app.transpiled.js
npx terser build/main-app.transpiled.js -o build/main-app.js
rm build/main-app.transpiled.js

# Transpile and minify nocode-ai/app.js
npx babel nocode-ai/app.js --out-file build/nocode-ai/app.transpiled.js
npx terser build/nocode-ai/app.transpiled.js -o build/nocode-ai/app.js
rm build/nocode-ai/app.transpiled.js

# Мініфікація компонентів
echo "🧩 Мініфікація компонентів..."
for file in components/*.js; do
  npx babel "$file" --out-file "build/${file%.js}.transpiled.js"
  npx terser "build/${file%.js}.transpiled.js" -o "build/$file"
  rm "build/${file%.js}.transpiled.js"
done

for file in nocode-ai/components/*.js; do
  npx babel "$file" --out-file "build/${file%.js}.transpiled.js"
  npx terser "build/${file%.js}.transpiled.js" -o "build/$file"
  rm "build/${file%.js}.transpiled.js"
done

# Оптимізація зображень
echo "🖼️ Оптимізація зображень..."
# Оптимізація PNG та JPG в основній папці assets (якщо вона існує)
if [ -d "assets" ]; then
  npx imagemin "assets/**/*.{png,jpg,jpeg}" --out-dir=build/assets
  # Копіювання інших файлів з assets
  find assets -type f -not -name "*.png" -not -name "*.jpg" -not -name "*.jpeg" -exec cp {} build/{} \;
fi

# Оптимізація PNG та JPG у папці nocode-ai/assets
if [ -d "nocode-ai/assets" ]; then
  npx imagemin "nocode-ai/assets/**/*.{png,jpg,jpeg}" --out-dir=build/nocode-ai/assets
  # Копіювання інших файлів з nocode-ai/assets
  find nocode-ai/assets -type f -not -name "*.png" -not -name "*.jpg" -not -name "*.jpeg" -exec cp {} build/{} \;
fi

# Копіювання інших статичних файлів
echo "📁 Копіювання інших статичних файлів..."
cp -r .gitignore README.md build/

echo "✅ Збірка завершена! Файли доступні в директорії build/"