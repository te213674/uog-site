# ТЕХНИЧЕСКИЕ ТРЕБОВАНИЯ К САЙТУ УОГ
## Этап 6 плана разработки B2B-сайта

---

## 1. ПЛАТформа И ТЕХНОЛОГИИ

### 1.1. Варианты реализации

| Вариант | Технологии | Плюсы | Минусы | Примечание |
|---------|------------|-------|--------|------------|
| **A: Статический сайт** | HTML/CSS/JS | Быстрая загрузка, простой хостинг | Нет CMS для управления | Рекомендуется для B2B |
| **B: CMS (WordPress)** | WordPress + WPML/Polylang | Удобное управление, мультиязычность | Медленнее, сложнее хостинг | Для частых обновлений |
| **C: Конструктор (Tilda)** | Tilda Publishing | Быстрый запуск | Ограниченная гибкость, стоимость | Для быстрого запуска |

### 1.2. Рекомендуемый вариант: Статический сайт

**Технологии:**
- HTML5 (семантическая вёрстка)
- CSS3 (BEM, CSS Variables)
- JavaScript ES6+ (модульная структура)
- Сборка: Vite/Webpack (опционально)

**Почему:**
- B2B-сайт не требует частых обновлений контента
- Максимальная скорость загрузки
- Минимальные затраты на хостинг
- Легко поддерживать

---

## 2. АДАПТИВНОСТЬ

### 2.1. Брейкпоинты

| Брейкпоинт | Ширина | Описание |
|------------|--------|----------|
| Mobile | 320px - 767px | Мобильные устройства |
| Tablet Portrait | 768px - 1023px | Портретные планшеты |
| Tablet Landscape | 1024px - 1439px | Ландшафтные планшеты |
| Desktop | 1440px - 1919px | Стандартные десктопы |
| Large Desktop | 1920px+ | Большие экраны |

### 2.2. Тестирование на устройствах

**Обязательные устройства:**
- iPhone SE (320px)
- iPhone 14 (390px)
- iPad (768px)
- MacBook Air (1440px)
- Desktop (1920px)

**Браузеры:**
- Chrome (последняя версия)
- Firefox (последняя версия)
- Safari (последняя версия)
- Edge (последняя версия)

---

## 3. ИНТЕГРАЦИИ

### 3.1. CRM

**Требуется уточнение:**
- Какая CRM используется?
- API для отправки форм
- Синхронизация лидов

**Варианты:**
- Bitrix24
- AmoCRM
- RetailCRM
- Самописная CRM

### 3.2. Аналитика

| Инструмент | Цель | Статус |
|------------|------|--------|
| Яндекс.Метрика | Отслеживание трафика | Требуется установка |
| Google Analytics | Отслеживание трафика | Требуется установка |
| Яндекс.Вебмастер | Индексация в Яндексе | Требуется |
| Google Search Console | Индексация в Google | Требуется |

### 3.3. Мессенджеры

**Кнопки связи:**
- WhatsApp (API: `https://wa.me/XXXXXXXXXX`)
- Telegram (API: `https://t.me/XXXXXXXX`)
- Телефон (клик для вызова)

### 3.4. Email

**Отправка форм:**
- SMTP сервер
- PHP mail() (для статического сайта)
- Formspree.io (сервис для форм)
- EmailJS (client-side отправка)

---

## 4. БЕЗОПАСНОСТЬ

### 4.1. SSL-сертификат

**Обязательно:**
- HTTPS для всех страниц
- Redirect HTTP → HTTPS
- HSTS header

**Поставщики:**
- Let's Encrypt (бесплатный)
- Cloudflare (бесплатный + CDN)
- Платные сертификаты (для enterprise)

### 4.2. Защита от спама

| Метод | Описание | Рекомендация |
|-------|----------|--------------|
| reCAPTCHA v2 | Google captcha | Рекомендуется |
| reCAPTCHA v3 | Invisible captcha | Рекомендуется |
| Honeypot field | Скрытое поле | Дополнительно |
| Rate limiting | Ограничение отправок | Обязательно |

### 4.3. Резервное копирование

**Для статического сайта:**
- Git repository (GitHub/GitLab)
- Хостинг с auto-backup
- Регулярный export данных форм

---

## 5. МУЛЬТИЯЗЫЧНОСТЬ

### 5.1. Структура URL

```
https://gazecos.ru/ru/     - русская версия
https://gazecos.ru/en/     - английская версия
https://gazecos.ru/        - default (redirect to /ru/)
```

### 5.2. hreflang теги

```html
<head>
  <link rel="alternate" hreflang="ru" href="https://gazecos.ru/ru/page">
  <link rel="alternate" hreflang="en" href="https://gazecos.ru/en/page">
  <link rel="alternate" hreflang="x-default" href="https://gazecos.ru/ru/page">
</head>
```

### 5.3. Переключатель языков

**Функционал:**
- Кнопка RU/EN в header
- Сохранение выбора (localStorage)
- Redirect на соответствующую версию

**Код:**
```javascript
// language-switcher.js
const switchLanguage = (lang) => {
  const currentPath = window.location.pathname;
  const newPath = currentPath.replace('/ru/', `/${lang}/`).replace('/en/', `/${lang}/`);
  window.location.href = newPath;
  localStorage.setItem('language', lang);
};
```

---

## 6. ПРОИЗВОДИТЕЛЬность

### 6.1. Целевые метрики (Lighthouse)

| Метрика | Target | Описание |
|---------|--------|----------|
| Performance | > 90 | Общая производительность |
| Accessibility | > 90 | Доступность |
| Best Practices | > 90 | Лучшие практики |
| SEO | > 90 | SEO оптимизация |

### 6.2. Оптимизация

**Изображения:**
- WebP формат с JPEG fallback
- Сжатие 80-85%
- Lazy loading
- Правильные размеры (width/height атрибуты)

**CSS/JS:**
- Минификация
- Critical CSS inline
- Асинхронная加载ка остального CSS
- Code splitting для JS

**Кэширование:**
- Browser cache headers
- Service Worker (опционально)
- CDN для статики

### 6.3. Скорость загрузки

**Target:**
- First Contentful Paint (FCP): < 1.5s
- Time to Interactive (TTI): < 3.5s
- Total Page Size: < 2MB

---

## 7. HOSTING И DEPLOY

### 7.1. Хостинг

**Варианты:**

| Хостинг | Стоимость | Примечание |
|---------|-----------|------------|
| Vercel | Бесплатно (для статики) | Auto-deploy из Git |
| Netlify | Бесплатно (для статики) | Forms, Functions |
| GitHub Pages | Бесплатно | Simple hosting |
| Cloudflare Pages | Бесплатно | CDN + hosting |
| Traditional hosting | ~500 руб/мес | Для WordPress |

### 7.2. Domain

**Требуется:**
- gazecos.ru (если не используется)
- Настройка DNS
- SSL certificate

### 7.3. Deploy процесс

**Для статического сайта:**
1. Push в Git repository
2. Auto-deploy на хостинг
3. Verify SSL
4. Проверка индексации

---

## 8. ТЕХНИЧЕСКИЙ КОНТРОЛЬНЫЙ СПИСОК

### 8.1. Перед запуском

- [ ] HTML валиден (W3C Validator)
- [ ] CSS без ошибок
- [ ] JavaScript без console.error
- [ ] Все изображения имеют alt
- [ ] Формы имеют label
- [ ] Контрастность цветов WCAG AA
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse SEO > 90
- [ ] Meta-теги заполнены
- [] hreflang для мультиязычности
- [ ] SSL установлен
- [ ] Forms работают
- [ ] reCAPTCHA установлена
- [ ] Аналитика подключена
- [ ] Sitemap.xml создан
- [ ] Robots.txt настроен
- [ ] 404 страница создана
- [ ] Redirect HTTP → HTTPS

### 8.2. После запуска

- [ ] Индексация в Яндекс.Вебмастер
- [ ] Индексация в Google Search Console
- [ ] Проверка backlinks
- [ ] Мониторинг трафика (аналитика)
- [ ] Мониторинг конверсий (формы)
- [ ] Регулярный backup

---

## 9. ТЕХНИЧЕСКАЯ ДОКУМЕНТАЦИЯ

### 9.1. Для разработчиков

**Файлы:**
- `rules/code-style.md` — правила кода
- `rules/design-guidelines.md` — правила дизайна
- `rules/errors-log.md` — журнал ошибок
- `rules/solutions-kb.md` — база решений

### 9.2. Для пользователей

**Файлы:**
- Инструкция по обновлению контента
- Инструкция по добавлению страниц
- Инструкция по работе с формами

---

## 10. ПРИЛОЖЕНИЕ: ТЕХНИЧЕСКИЙ СТЕК

### 10.1. Frontend

```
HTML5
CSS3 (BEM, Variables, Grid, Flexbox)
JavaScript ES6+ (Modules, Async/Await)
Vite (опционально для сборки)
```

### 10.2. Интеграции

```
Яндекс.Метрика
Google Analytics
reCAPTCHA v3
EmailJS / Formspree
WhatsApp/Telegram API
```

### 10.3. Хостинг

```
Vercel / Netlify / Cloudflare Pages
Let's Encrypt SSL
Git-based deploy
```

---

*Документ обновлён: 03.03.2026*