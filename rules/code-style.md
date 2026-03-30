# Правила написания кода (Code Style Guide)
## Для проекта B2B-сайта УОГ

---

## 1. HTML

### 1.1. Семантическая вёрстка
Использовать семантические теги HTML5:
```html
<!-- Правильно -->
<header>
  <nav>
    <ul>
      <li><a href="/">Главная</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Заголовок</h1>
    <section>
      <h2>Подзаголовок</h2>
      <p>Текст</p>
    </section>
  </article>
</main>

<footer>
  <p>&copy; 2026 УОГ</p>
</footer>
```

### 1.2. Структура документа
```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Заголовок страницы</title>
  <meta name="description" content="Описание страницы">
  <link rel="canonical" href="https://example.com/page">
</head>
<body>
  <!-- Контент -->
</body>
</html>
```

### 1.3. Доступность (a11y)
```html
<!-- Изображения с alt -->
<img src="installation.jpg" alt="Установка УОГ-200 на объекте">

<!-- Формы с label -->
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>

<!-- ARIA-атрибуты для сложных элементов -->
<button aria-expanded="false" aria-controls="menu">Меню</button>
```

---

## 2. CSS

### 2.1. BEM-нейминг
```css
/* Блок */
.header {}

/* Элемент */
.header__logo {}
.header__nav {}
.header__menu-item {}

/* Модификатор */
.header--fixed {}
.header__menu-item--active {}

/* Вложенные элементы */
.header__nav-list {}
.header__nav-list-item {}
```

### 2.2. Структура CSS-файла
```css
/* 1. Переменные */
:root {
  --color-primary: #0066cc;
  --color-secondary: #ff9900;
  --color-text: #333333;
  --color-bg: #ffffff;
  --spacing-unit: 8px;
}

/* 2. Сброс и базовые стили */
*, *::before, *::after {
  box-sizing: border-box;
}

/* 3. Утилиты */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

/* 4. Компоненты */
.btn {
  display: inline-block;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn--primary {
  background-color: var(--color-primary);
  color: white;
}

/* 5. Медиа-запросы */
@media (max-width: 768px) {
  .container {
    padding: 0 12px;
  }
}
```

### 2.3. Mobile-first подход
```css
/* Базовые стили для мобильных */
.card {
  padding: 16px;
  margin-bottom: 16px;
}

/* Планшеты */
@media (min-width: 768px) {
  .card {
    padding: 24px;
  }
}

/* Десктоп */
@media (min-width: 1024px) {
  .card {
    padding: 32px;
  }
}
```

---

## 3. JavaScript

### 3.1. ES6+ стандарт
```javascript
// Использовать const/let вместо var
const API_URL = 'https://api.example.com';
let counter = 0;

// Стрелочные функции
const handleClick = (event) => {
  event.preventDefault();
  // логика
};

// Деструктуризация
const { name, value } = formData;

// Шаблонные строки
const message = `Привет, ${name}!`;
```

### 3.2. Модульная структура
```javascript
// calculator.js
export const calculate = (a, b, operation) => {
  switch (operation) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    default:
      throw new Error('Unknown operation');
  }
};

// main.js
import { calculate } from './calculator.js';
```

### 3.3. Обработка ошибок
```javascript
// Асинхронные операции
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    // Логирование в errors-log.md
    throw error;
  }
}

// Валидация форм
function validateForm(formData) {
  const errors = [];
  
  if (!formData.email || !isValidEmail(formData.email)) {
    errors.push('Некорректный email');
  }
  
  if (formData.phone && !isValidPhone(formData.phone)) {
    errors.push('Некорректный телефон');
  }
  
  return errors;
}
```

### 3.4. Работа с DOM
```javascript
// Делегирование событий
document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  handleSubmit(formData);
});

// Безопасная вставка контента
function setSafeHTML(element, text) {
  element.textContent = text; // вместо innerHTML
}
```

---

## 4. Производительность

### 4.1. Оптимизация изображений
```html
<!-- WebP с фолбэком -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Описание" loading="lazy">
</picture>

<!-- Lazy loading для изображений ниже первого экрана -->
<img src="photo.jpg" alt="Фото" loading="lazy" width="800" height="600">
```

### 4.2. Минификация
- CSS: использовать минифицированные версии для продакшена
- JS: сборка через bundler (Webpack, Vite) с минификацией

### 4.3. Критический CSS
```html
<!-- Критический CSS инлайн -->
<style>
  /* Стили для первого экрана */
  .header { ... }
  .hero { ... }
</style>

<!-- Остальные CSS асинхронно -->
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

---

## 5. SEO

### 5.1. Структура заголовков
```html
<h1>Основной заголовок (один на страницу)</h1>
<h2>Разделы</h2>
<h3>Подразделы</h3>
```

### 5.2. Meta-теги
```html
<head>
  <title>УОГ - Установки очистки газа от сероводорода</title>
  <meta name="description" content="Установки УОГ для очистки ПНГ и биогаза. Себестоимость от 1,2 руб/нм³. Жидкофазное окисление.">
  <meta name="keywords" content="УОГ, очистка газа, сероводород, ПНГ, биогаз">
  
  <!-- Open Graph -->
  <meta property="og:title" content="УОГ - Установки очистки газа">
  <meta property="og:description" content="Технология жидкофазного окисления">
  <meta property="og:image" content="/og-image.jpg">
  <meta property="og:url" content="https://example.com">
  
  <!-- Canonical -->
  <link rel="canonical" href="https://example.com/ru/page">
</head>
```

### 5.3. Sitemap и robots.txt
```xml
<!-- sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/ru/</loc>
    <lastmod>2026-02-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

```txt
# robots.txt
User-agent: *
Allow: /
Sitemap: https://example.com/sitemap.xml
```

---

## 6. Мультиязычность

### 6.1. Структура URL
```
/ru/     - русская версия
/en/     - английская версия
```

### 6.2. hreflang теги
```html
<head>
  <link rel="alternate" hreflang="ru" href="https://example.com/ru/page">
  <link rel="alternate" hreflang="en" href="https://example.com/en/page">
  <link rel="alternate" hreflang="x-default" href="https://example.com/ru/page">
</head>
```

---

## 7. Контрольный список перед коммитом

- [ ] HTML валиден (проверено через W3C Validator)
- [ ] CSS без ошибок
- [ ] JavaScript без console.error
- [ ] Все изображения имеют alt
- [ ] Формы имеют label
- [ ] Контрастность цветов соответствует WCAG
- [ ] Страница проходит Lighthouse тест (>90 для Performance)
- [ ] Мета-теги заполнены
- [ ] Ссылки работают (нет 404)

---

*Документ будет дополняться по мере выявления ошибок и их решений*
*См. также: errors-log.md, solutions-kb.md*