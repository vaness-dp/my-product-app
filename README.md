# My Product App

My Product App — это современное одностраничное приложение (SPA) на Next.js 15 с динамическим роутингом, Tailwind CSS для стилизации, Zustand для управления глобальным состоянием и React Hook Form для работы с формами. Проект демонстрирует возможности статического экспорта Next.js для деплоя на GitHub Pages.

## Особенности

- **Динамический роутинг:** просмотр деталей продукта, редактирование и создание нового продукта.
- **Глобальное состояние:** используется Zustand для управления списком продуктов и состоянием лайков, редактирования и удаления.
- **Формы с валидацией:** реализация форм создания и редактирования с помощью React Hook Form.
- **Статический экспорт:** проект настроен для экспорта с помощью `output: 'export'` для деплоя на GitHub Pages.
- **Tailwind CSS:** удобная и быстрая стилизация интерфейса.

## Технологический стек

- **Next.js 15** – основа приложения с динамическим роутингом и статическим экспортом.
- **React 19** – библиотека для создания пользовательского интерфейса.
- **Tailwind CSS 4** – утилитарный CSS-фреймворк для быстрой стилизации.
- **Zustand 5** – управление глобальным состоянием.
- **React Hook Form** – управление формами и валидация.
- **gh-pages** – инструмент для деплоя на GitHub Pages.

## Установка

1. **Клонируйте репозиторий:**

   ```bash
   git clone https://github.com/<your-username>/my-product-app.git
   cd my-product-app
   
## 2. Установите зависимости

Если используете npm:

```bash
npm install
```

Или с помощью bun:

```bash
bun install
```

## 3. Конфигурация Next.js

Проект настроен для статического экспорта. Откройте файл `next.config.ts` и убедитесь, что он выглядит примерно так:

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/my-product-app',
  assetPrefix: '/my-product-app/',
  trailingSlash: true
}

export default nextConfig
```

**Важно:**

- `basePath` указывает базовый путь для всего приложения (без завершающего слэша).
- `assetPrefix` задаёт префикс для статики (со слэшем в конце).
- `trailingSlash: true` гарантирует, что каждая страница будет сгенерирована в виде папки с файлом `index.html`.

## 4. Редирект с корневого URL

Чтобы при заходе на [https://vaness-dp.github.io/my-product-app/](https://vaness-dp.github.io/my-product-app/) происходил редирект на страницу `/products`, создайте файл `redirect-index.html` в корневой папке проекта со следующим содержимым:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="refresh" content="0; url=/my-product-app/products" />
    <title>Redirecting...</title>
  </head>
  <body>
    <p>Redirecting to <a href="/my-product-app/products">/products</a>...</p>
  </body>
</html>
```

Затем обновите скрипты в `package.json`, чтобы после сборки этот файл копировался в папку `out` как `index.html`:

```json
{
  "scripts": {
    "build": "next build",
    "postbuild": "cp redirect-index.html out/index.html",
    "deploy": "npm run build && gh-pages -d out"
  }
}
```

## 5. Деплой на GitHub Pages

1. Создайте репозиторий на GitHub (если ещё не создан) с именем `my-product-app` или другим, подходящим для вашего проекта.
2. Подключите удалённый репозиторий:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<your-username>/my-product-app.git
git branch -M main
git push -u origin main
```

3. Запустите деплой:

```bash
npm run deploy
```

Эта команда выполнит сборку, скопирует файл редиректа и опубликует содержимое папки `out` в ветку `gh-pages`.

4. Настройте GitHub Pages:

- Перейдите в настройки репозитория на GitHub.
- В разделе **Pages** выберите в качестве источника ветку `gh-pages` и корень проекта.
- После нескольких минут сайт будет доступен по адресу:  
  [https://vaness-dp.github.io/my-product-app/](https://vaness-dp.github.io/my-product-app/)

## 6. Структура проекта

Пример структуры папки `app`:

```
app
├── create-product
│   └── page.tsx
├── products
│   ├── [id]
│   │   └── page.tsx          // Страница деталей продукта
│   └── edit
│       └── [id]
│           ├── page.tsx      // Серверный компонент, передающий данные клиентскому
│           └── EditProductClient.tsx  // Клиентский компонент для редактирования
├── globals.css
├── layout.tsx
└── page.tsx                  // Главная страница (опционально)
```

- Динамические маршруты реализованы через функции `generateStaticParams()` для `/products/[id]` и `/products/edit/[id]`.
- Клиентская логика для редактирования вынесена в отдельный компонент с директивой `"use client"` (файл `EditProductClient.tsx`).

## 7. Запуск в режиме разработки

Для локального запуска приложения выполните:

```bash
npm run dev
```

Приложение будет доступно по адресу: [http://localhost:3000](http://localhost:3000)

## 8. Примечания

- **.nojekyll**: В корне папки `out` должен быть файл `.nojekyll` (Next.js обычно создаёт его автоматически), чтобы GitHub Pages не игнорировал папки, начинающиеся с `_`.
- **Динамические маршруты**: Если список продуктов постоянно меняется, учтите, что при статическом экспорте страницы с динамическими маршрутами генерируются только для ID, возвращённых функцией `generateStaticParams()`.
- **Редирект**: Если редирект не работает, убедитесь, что файл `redirect-index.html` копируется в `out/index.html` (проверьте содержимое папки `out` после сборки).

## 9. Заключение

Этот проект демонстрирует, как создать современное SPA с динамическим роутингом, глобальным состоянием, валидацией форм и стилизацией через Tailwind CSS, а затем собрать его и задеплоить на GitHub Pages.  
Если у вас возникнут вопросы или понадобится помощь, пожалуйста, создайте issue в репозитории или свяжитесь с автором проекта.
