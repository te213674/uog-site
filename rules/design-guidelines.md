# Правила работы с дизайном (Design Guidelines)
## Для проекта B2B-сайта УОГ

---

## 1. Принципы дизайна

### 1.1. Промышленный минимализм
- Чистые линии и простые формы
- Акцент на функциональности, а не декоре
- Минимум визуального шума
- Максимум полезной информации

### 1.2. Иерархия информации
```
Уровень 1: Заголовок H1 (главное сообщение)
Уровень 2: Подзаголовки H2 (разделы)
Уровень 3: Подзаголовки H3 (подразделы)
Уровень 4: Основной текст
Уровень 5: Второстепенная информация
```

### 1.3. Консистентность
- Единый стиль всех страниц
- Одинаковые элементы управления
- Последовательная типографика
- Единая система отступов

---

## 2. Цветовая гамма

### 2.1. Основные цвета
```
┌─────────────────────────────────────────────┐
│  Основной (Primary)                          │
│  #0066CC - Синий (газ, экология, доверие)   │
│  Использование: кнопки, ссылки, акценты     │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  Акцентный (Secondary)                       │
│  #FF9900 - Оранжевый (сера, энергия)        │
│  Использование: CTA-кнопки, важные элементы │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  Фоновый (Background)                        │
│  #FFFFFF - Белый (чистота)                  │
│  #F5F7FA - Светло-серый (разделители)       │
│  Использование: фоны страниц и секций       │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  Текстовый (Text)                            │
│  #1A1A2E - Тёмно-синий (заголовки)          │
│  #333333 - Тёмно-серый (основной текст)     │
│  #666666 - Серый (второстепенный текст)     │
│  #999999 - Светло-серый (placeholder)       │
└─────────────────────────────────────────────┘
```

### 2.2. CSS переменные
```css
:root {
  /* Основные цвета */
  --color-primary: #0066CC;
  --color-primary-hover: #0052A3;
  --color-primary-light: #E6F0FF;
  
  --color-secondary: #FF9900;
  --color-secondary-hover: #CC7A00;
  --color-secondary-light: #FFF4E6;
  
  /* Фоны */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F5F7FA;
  --color-bg-tertiary: #E8ECF1;
  
  /* Текст */
  --color-text-primary: #1A1A2E;
  --color-text-secondary: #333333;
  --color-text-tertiary: #666666;
  --color-text-disabled: #999999;
  
  /* Границы */
  --color-border: #DDE2E8;
  --color-border-light: #E8ECF1;
  
  /* Статусы */
  --color-success: #28A745;
  --color-warning: #FFC107;
  --color-error: #DC3545;
  --color-info: #17A2B8;
}
```

### 2.3. Контрастность (WCAG 2.1)
```
Минимальный контраст для обычного текста: 4.5:1
Минимальный контраст для крупного текста: 3:1
Минимальный контраст для UI элементов: 3:1

Проверка комбинаций:
✓ #1A1A2E на #FFFFFF = 16.5:1 (AAA)
✓ #333333 на #FFFFFF = 12.6:1 (AAA)
✓ #0066CC на #FFFFFF = 5.0:1 (AA)
✓ #FFFFFF на #0066CC = 5.0:1 (AA)
✓ #1A1A2E на #FF9900 = 8.2:1 (AAA)
```

---

## 3. Типографика

### 3.1. Шрифты
```
Основной шрифт: Inter (Google Fonts)
Альтернативы: Roboto, Open Sans, system-ui

Моноширинный (для кода): JetBrains Mono, Fira Code
```

### 3.2. Подключение шрифтов
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 3.3. Иерархия шрифтов
```css
:root {
  /* Размеры шрифтов */
  --font-size-xs: 12px;    /* Подписи, мета-информация */
  --font-size-sm: 14px;    /* Второстепенный текст */
  --font-size-base: 16px;  /* Основной текст */
  --font-size-lg: 18px;    /* Крупный текст, лиды */
  --font-size-xl: 20px;    /* H4 */
  --font-size-2xl: 24px;   /* H3 */
  --font-size-3xl: 30px;   /* H2 */
  --font-size-4xl: 36px;   /* H1 */
  
  /* Межстрочные интервалы */
  --line-height-tight: 1.25;
  --line-height-base: 1.5;
  --line-height-relaxed: 1.75;
  
  /* Межбуквенные интервалы */
  --letter-spacing-tight: -0.025em;
  --letter-spacing-base: 0;
  --letter-spacing-wide: 0.025em;
}

/* Применение */
h1 {
  font-size: var(--font-size-4xl);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  font-weight: 700;
}

h2 {
  font-size: var(--font-size-3xl);
  line-height: var(--line-height-tight);
  font-weight: 600;
}

h3 {
  font-size: var(--font-size-2xl);
  line-height: var(--line-height-tight);
  font-weight: 600;
}

h4 {
  font-size: var(--font-size-xl);
  line-height: var(--line-height-tight);
  font-weight: 600;
}

p {
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  color: var(--color-text-secondary);
}
```

### 3.4. Адаптивная типографика
```css
/* Мобильные (базовые стили) */
h1 { font-size: 28px; }
h2 { font-size: 22px; }

/* Планшеты */
@media (min-width: 768px) {
  h1 { font-size: 36px; }
  h2 { font-size: 28px; }
}

/* Десктоп */
@media (min-width: 1024px) {
  h1 { font-size: 42px; }
  h2 { font-size: 32px; }
}
```

---

## 4. Компоненты

### 4.1. Кнопки
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

/* Основная кнопка */
.btn--primary {
  background-color: var(--color-primary);
  color: white;
}

.btn--primary:hover {
  background-color: var(--color-primary-hover);
}

.btn--primary:active {
  background-color: #004080;
}

.btn--primary:disabled {
  background-color: var(--color-border);
  cursor: not-allowed;
  opacity: 0.6;
}

/* Вторичная кнопка */
.btn--secondary {
  background-color: transparent;
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.btn--secondary:hover {
  background-color: var(--color-primary-light);
}

/* CTA кнопка (акцентная) */
.btn--cta {
  background-color: var(--color-secondary);
  color: var(--color-text-primary);
}

.btn--cta:hover {
  background-color: var(--color-secondary-hover);
}

/* Размеры */
.btn--sm {
  padding: 8px 16px;
  font-size: 14px;
}

.btn--lg {
  padding: 16px 32px;
  font-size: 18px;
}

/* Полная ширина */
.btn--full {
  width: 100%;
}
```

### 4.2. Формы
```css
.form-group {
  margin-bottom: 24px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-primary);
}

.form-label--required::after {
  content: ' *';
  color: var(--color-error);
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-text-secondary);
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-light);
}

.form-input::placeholder {
  color: var(--color-text-disabled);
}

.form-input--error {
  border-color: var(--color-error);
}

.form-input--error:focus {
  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.15);
}

.form-error {
  margin-top: 4px;
  font-size: 14px;
  color: var(--color-error);
}

.form-hint {
  margin-top: 4px;
  font-size: 14px;
  color: var(--color-text-tertiary);
}

/* Checkbox и Radio */
.form-check {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.form-check-input {
  width: 20px;
  height: 20px;
  margin-top: 2px;
  accent-color: var(--color-primary);
}

.form-check-label {
  font-size: 16px;
  color: var(--color-text-secondary);
}
```

### 4.3. Карточки
```css
.card {
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card__content {
  padding: 24px;
}

.card__title {
  margin: 0 0 12px;
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text-primary);
}

.card__description {
  margin: 0 0 16px;
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-text-secondary);
}

.card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid var(--color-border-light);
}
```

### 4.4. Навигация
```css
/* Хедер */
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border);
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.header__logo {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
}

.header__nav {
  display: flex;
  gap: 32px;
}

.header__nav-link {
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.header__nav-link:hover {
  color: var(--color-primary);
}

.header__nav-link--active {
  color: var(--color-primary);
}

/* Мобильное меню */
.header__menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

@media (max-width: 768px) {
  .header__nav {
    display: none;
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    flex-direction: column;
    padding: 16px;
    background-color: var(--color-bg-primary);
    border-bottom: 1px solid var(--color-border);
  }
  
  .header__nav--open {
    display: flex;
  }
  
  .header__menu-toggle {
    display: block;
  }
}
```

### 4.5. Таблицы
```css
.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.table th,
.table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

.table th {
  font-weight: 600;
  color: var(--color-text-primary);
  background-color: var(--color-bg-secondary);
}

.table td {
  color: var(--color-text-secondary);
}

.table tr:hover {
  background-color: var(--color-bg-secondary);
}

/* Адаптивная таблица */
@media (max-width: 768px) {
  .table-responsive {
    overflow-x: auto;
  }
}
```

---

## 5. Адаптивность

### 5.1. Брейкпоинты
```css
/* Мобильные (базовые стили) */
/* 0px - 767px */

/* Планшеты портретные */
@media (min-width: 768px) {
  /* Стили для планшетов */
}

/* Планшеты ландшафтные / малые десктопы */
@media (min-width: 1024px) {
  /* Стили для планшетов ландшафтных */
}

/* Десктопы */
@media (min-width: 1440px) {
  /* Стили для больших экранов */
}

/* Большие десктопы */
@media (min-width: 1920px) {
  /* Стили для больших экранов */
}
```

### 5.2. Контейнер
```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 768px) {
  .container {
    padding: 0 24px;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 32px;
  }
}
```

### 5.3. Сетка (Grid)
```css
.grid {
  display: grid;
  gap: 24px;
}

.grid--cols-1 {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid--cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .grid--cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .grid--cols-4 {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

## 6. Иконки

### 6.1. Стиль иконок
- Линейные (outline) или залитые (filled)
- Толщина линии: 2px
- Размер: 16px, 20px, 24px, 32px
- Цвет: соответствует контексту

### 6.2. Использование
```html
<!-- Иконка в кнопке -->
<button class="btn btn--primary">
  <svg class="icon icon--sm" aria-hidden="true">
    <use href="#icon-arrow"></use>
  </svg>
  <span>Отправить</span>
</button>

<!-- Иконка с текстом -->
<div class="feature">
  <svg class="icon icon--lg" aria-hidden="true">
    <use href="#icon-check"></use>
  </svg>
  <span>Гарантия качества</span>
</div>
```

---

## 7. Изображения

### 7.1. Обработка фотографий
- Формат: WebP с JPEG fallback
- Сжатие: 80-85% качество
- Максимальная ширина: 1920px для hero, 800px для контента
- Lazy loading для изображений ниже первого экрана

### 7.2. Hero-изображения
```css
.hero {
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
}

.hero__background {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
}

.hero__content {
  position: relative;
  color: white;
  max-width: 600px;
}
```

---

## 8. Анимации

### 8.1. Принципы
- Длительность: 150-300ms
- Функция плавности: ease, ease-out
- Анимировать только transform и opacity
- Избегать анимаций при reduced-motion

### 8.2. CSS переходы
```css
/* Плавные переходы */
.btn {
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn:active {
  transform: translateY(0);
}

/* Уважение prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. Контрольный список дизайна

- [ ] Цветовая схема соответствует бренду
- [ ] Контрастность текста соответствует WCAG AA
- [ ] Типографика читаема на всех устройствах
- [ ] Кнопки имеют понятные состояния (hover, active, disabled)
- [ ] Формы имеют валидацию и понятные сообщения об ошибках
- [ ] Изображения оптимизированы
- [ ] Адаптивность проверена на всех брейкпоинтах
- [ ] Анимации не мешают пользователю
- [ ] Иконки имеют aria-hidden или aria-label
- [ ] Дизайн консистентен на всех страницах

---

*Документ будет дополняться по мере работы над проектом*