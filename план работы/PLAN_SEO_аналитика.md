# ПЛАН SEO-АУДИТА И ОПТИМИЗАЦИИ САЙТА SORBGAZ (УОГ)

> Дата: 02.04.2026  
> Статус: Готов к реализации  
> Основание: Анализ сайта + парсинг конкурентов (gazsurf.ru, grasys.ru)

---

## СОДЕРЖАНИЕ

1. [Вводные данные](#1-вводные-данные)
2. [SEO-аудит текущего состояния](#2-seo-аудит-текущего-состояния)
3. [Конкурентный анализ (реальные данные)](#3-конкурентный-анализ)
4. [SEO-ключевые слова и распределение](#4-seo-ключевые-слова)
5. [План подключения аналитики](#5-подключение-аналитики)
6. [Интеграция Bitrix24](#6-интеграция-bitrix24)
7. [Технический SEO-чеклист](#7-технический-seo-чеклист)
8. [Поэтапный план реализации](#8-поэтапный-план)

---

## 1. ВВОДНЫЕ ДАННЫЕ

### 1.1 Что известно

| Параметр | Значение |
|---|---|
| Сайт | SorbGaz / УОГ (установки очистки газа) |
| Технология | Жидкофазное окисление H2S (хелатное железо) |
| Продукция | УОГ-20, УОГ-100, УОГ-200, УОГ-1500, УОГ-5000 |
| Целевые газы | ПНГ, биогаз, свалочный газ, промышленные серосодержащие газы |
| CRM | Bitrix24 (будет подключена) |
| Аналитика | **НЕ подключена** (ни Метрика, ни GA4) |
| Языки | RU (основной), EN (кнопка есть, контента нет) |

### 1.2 Целевые ключевые слова (из `SEO ключи.txt`)

**Основная группа:**
- абсорбция серы
- десульфуризация
- биогаз очистка
- очистка ПНГ
- скрубберы газов

**Дополнительные (из файла):**
- установка очистки газа
- сероочистка газа
- удаление сероводорода
- очистка биогаза от сероводорода
- подготовка попутного нефтяного газа
- дегазация полигона
- утилизация сероводорода
- модульная установка очистки газа
- УОГ установка
- h2s removal
- biogas desulfurization
- gas sweetening

### 1.3 Минус-слова (из `SEO ключи.txt`)

```
кальций, калий, нефтепродуктов, аккумулятор, воды, картридж, запаха
```

---

## 2. SEO-АУДИТ ТЕКУЩЕГО СОСТОЯНИЯ

### 2.1 Чеклист по страницам

#### index.html (Главная)

| Элемент | Текущее состояние | Проблема | Решение |
|---|---|---|---|
| Title | "УОГ — Установки очистки газа от сероводорода \| SorbGaz" | Нет: десульфуризация, биогаз, ПНГ, скруббер | Расширить до 70 символов с ключами |
| Description | "Установки УОГ для очистки ПНГ и биогаза от сероводорода..." | ~100 символов, можно больше | Расширить до 160, добавить CTA |
| Keywords meta | Отсутствует | Не критично для Google/Яндекс | Добавить для полноты |
| H1 | "Установки очистки газа от сероводорода" | OK, но можно усилить | Добавить "десульфуризация" |
| H2 | Есть (4 шт.) | OK | — |
| Schema.org | **НЕТ** | 🔴 Критично | Добавить JSON-LD |
| Open Graph | **НЕТ** | 🔴 Критично | Добавить og:title, og:image, og:description |
| Canonical | **НЕТ** | ⚠️ Желательно | Добавить |
| Alt-теги изображений | Есть, но короткие | ⚠️ Улучшить | Сделать описательными (10+ слов) |
| Формы захвата | 2 формы ✅ | OK | Подключить к Bitrix24 |

#### desulfurization.html (Сероочистка)

| Элемент | Состояние | Рекомендация |
|---|---|---|
| Title | Нужно проверить | Добавить: "Десульфуризация газа — установки УОГ \| SorbGaz" |
| Description | Нужно проверить | Коммерческий текст со словом "купить" |
| Контент | Нужна проверка | Сравнить с Grasys (их страница сероочистки — эталон!) |

#### biogas.html (Биогаз)

| Элемент | Состояние | Рекомендация |
|---|---|---|
| Title | Нужно проверить | "Очистка биогаза от сероводорода — модули УОГ \| SorbGaz" |
| Description | Нужно проверить | Акцент на "биогазовая станция", "очистка до 99%" |

#### about.html, products.html, projects.html

| Элемент | Рекомендация |
|---|---|
| Title | Уникальный для каждой страницы с ключевыми словами |
| Description | 130-160 символов, уникальный |
| H1 | Один на страницу, с ключом |

### 2.2 Общие проблемы сайта

```
🔴 КРИТИЧНО:
   [ ] Нет Schema.org микроразметки (Organization + Product + BreadcrumbList)
   [ ] Нет Open Graph / Twitter Cards (ссылки в соцсетях без превью)
   [ ] Нет Яндекс.Метрики и Google Analytics
   [ ] Content-Security-Policy блокирует внешние скрипты (нужно обновить)

⚠️ ВАЖНО:
   [ ] Нет robots.txt
   [ ] Нет sitemap.xml
   [ ] Нет canonical URL
   [ ] Alt-теги слишком короткие
   [ ] Английская версия не работает (только кнопка переключения)

✅ ХОРОШО:
   [x] Семантическая структура HTML (H1-H3)
   [x] Адаптивный дизайн (мобильная версия)
   [x] Быстрая загрузка (статический HTML)
   [x] Формы захвата (2 штуки)
   [x] Есть базовые title/description
```

---

## 3. КОНКУРЕНТНЫЙ АНАЛИЗ

### 3.1 GazSurf (gazsurf.ru) — результаты парсинга

**Что нашли:**
- Title: «ГазСёрф» — инжиниринговая компания в нефтегазовой отрасли
- Яндекс.Метрика: ID **32766525** (подключена!)
- Schema.org: ❌ НЕТ
- Open Graph: ❌ НЕТ
- Формы: ❌ 0 форм (!!!)
- Description на внутренних страницах: **8-23 символа** (практически пустые!)
- Ключевые слова: оборудование(8), установки(8), газопереработки(3), газа(4)
- **НЕТ ключей**: сероводород, десульфуризация, биогаз, ПНГ, скруббер

**Вывод:** GazSurf — это инжиниринговая компания широкого профиля. Они НЕ фокусируются на сероочистке как на основной нише. Это наш шанс занять эту нишу!

### 3.2 Grasys (grasys.ru) — результаты парсинга ⚠️ ПРЯМОЙ КОНКУРЕНТ!

**Что нашли:**
- Title главной: "Грасис - производитель воздухо- и газоразделительных систем"
- **Title страницы сероочистки**: "Хелатные установки жидкофазного окисления (сероочистка газа)" ← **ТА ЖЕ ТЕХНОЛОГИЯ!**
- Description сероочистки: "Купить хелатные установки жидкофазного окисления... по ценам производителя..."
- Schema.org: ❌ НЕТ
- Canonical: ✅ ЕСТЬ (на всех страницах)
- Формы: ✅ 1 форма на страницу
- Ключевые слова на странице сероочистки: сероочистки(**14**), газа(**25**), окисления(**7**), жидкофазного(**6**), сероводорода(**6**)

**КРИТИЧЕСКИЙ ВЫВОД:** Grasys продаёт хелатные установки жидкофазного окисления — это **идентичная технология УОГ**! Они наш прямой конкурент по этой нише.

**Но у них тоже есть слабости:**
- Нет Schema.org
- Нет Open Graph
- Много изображений без alt (39% имеют alt)
- about/ = 404

### 3.3 Сравнительная матрица

| Параметр | GazSurf | Grasys | **SorbGaz (мы)** | Наше действие |
|---|---|---|---|---|
| Schema.org | 🔴 | 🔴 | 🔴 | **Добавить первым!** |
| Open Graph | 🔴 | 🔴 | 🔴 | Добавить |
| Canonical | 🔴 | ✅ | 🔴 | Добавить |
| Яндекс.Метрика | ✅ | ? | 🔴 | Подключить |
| GA4 | 🔴 | ? | 🔴 | Подключить |
| Формы | 🔴 (0!) | ✅ (1) | ✅ (2) | OK |
| Descr (внутр.) | 🔴 (8-23сим) | ✅ (150-200) | ? | Сделать полные |
| Страница сероочистки | ❌ Нет | ✅ Есть | ✅ Есть | Усилить контент |
| Ключи: десульфуризация | ❌ | ❌ | ❌ | **Занять нишу!** |
| Ключи: абсорбция | ❌ | ❌ | ❌ | **Занять нишу!** |
| Ключи: скруббер | ❌ | ❌ | ❌ | **Занять нишу!** |

---

## 4. SEO-КЛЮЧЕВЫЕ СЛОВА И РАСПРЕДЕЛЕНИЕ ПО СТРАНИЦАМ

### 4.1 Матрица распределения ключевых слов

| Страница | Основные ключи | Дополнительные | Minus-слова | Рекомендуемый Title |
|---|---|---|---|---|
| **index.html** (Главная) | установка очистки газа, сероочистка газа, десульфуризация, УОГ | очистка ПНГ, биогаз очистка, скрубберы газов, удаление H2S | кальций, калий, аккумулятор, картридж | "УОГ — установки десульфуризации газа \¦ очистка ПНГ, биогаз \| SorbGaz" |
| **desulfurization.html** | десульфуризация, сероочистка газа, абсорбция серы, удаление сероводорода | жидкофазное окисление, хелатное железо, H2S removal, gas sweetening | — | "Десульфуризация газа — установки сероочистки УОГ \| SorbGaz" |
| **biogas.html** | биогаз очистка, очистка биогаза, биогазовая станция | удаление H2S из биогаза, дегазация полигона, свалочный газ | — | "Очистка биогаза от сероводорода — модули УОГ \| SorbGaz" |
| **landfill-gas.html** | свалочный газ, дегазация полигона, утилизация landfill gas | очистка свалочного газа, landfill gas treatment | — | "Очистка свалочного газа — дегазация полигонов УОГ \| SorbGaz" |
| **industrial-sulfur-gases.html** | промышленные газы, серосодержащие газы, H2S | очистка технологических газов, сероводород, mercaptan | — | "Очистка промышленных газов от серы — УОГ \| SorbGaz" |
| **products.html** (Продукция) | модельный ряд УОГ, УОГ-20 УОГ-100 УОГ-200 УОГ-1500, модульная установка | производительность, нм³/час, комплектация | — | "Модельный ряд установок УОГ — очистка газа 20-5000 нм³/час \| SorbGaz" |
| **about.html** (О компании) | производитель УОГ, SorbGaz, газоочистное оборудование | разработки, технологии, производство | — | "SorbGaz — производитель установок очистки газа УОГ \| О компании" |
| **projects.html** (Проекты | реализованные проекты, кейсы, объекты | ПНГ, биогаз, промышленность | — | "Проекты установок УОГ — реализованные объекты \| SorbGaz" |

### 4.2 Рекомендуемые Description (130-160 символов)

| Страница | Description |
|---|---|
| Главная | Производитель установок очистки газа УОГ от сероводорода. Десульфуризация ПНГ, биогаза, свалочного газа. Модули 20–5000 нм³/ч. Запросить КП → |
| Сероочистка | Установки десульфуризации газа УОГ — удаление H2S до 99%. Технология жидкофазного окисления. Купить у производителя. Доставка по РФ. |
| Биогаз | Модули очистки биогаза от сероводорода УОГ. Compact-решения для биогазовых станций. Подготовка газа до требований двигателей. |
| Продукция | Полный модельный ряд УОГ: 20, 100, 200, 1500, 5000 нм³/час. Модульные установки сероочистки под ключ. Цены производителя. |
| О компании | SorbGaz — российский разработчик и производитель установок очистки газа (УОГ). Собственные технологии, сервис, поставки. |

### 4.3 Текстовые вставки с ключевыми словами

Для каждой страницы рекомендуется естественным образом включить следующие фразы:

**Для index.html (главная):**
- "абсорбция сероводорода из газа"
- "десульфуризация природного и попутного газа"
- "скрубберы для очистки газовых потоков"
- "модульные установки очистки биогаза"

**Для desulfurization.html:**
- "процесс десульфуризации основан на жидкофазном каталитическом окислении"
- "абсорбция H2S с последующим окислением в элементарную серу"
- "альтернатива аминовой и адсорбционной очистке"

**Для biogas.html:**
- "очистка биогаза до требований ДВС и турбин"
- "удаление сероводорода из биогаза компактными модулями"
- "biogas desulfurization — технология УОГ"

---

## 5. ПОДКЛЮЧЕНИЕ АНАЛИТИКИ

### 5.1 Что такое Яндекс.Метрика?

**Простыми словами:** Бесплатный счётчик от Яндекса, который показывает:
- Кто заходит на сайт (география, устройства)
- Откуда пришёл (поиск, реклама, прямая ссылка)
- Что делает (какие страницы смотрит, ушёл или остался)
- Дошёл ли до цели (оставил заявку, позвонил)

**Почему нужна:** Без неё вы не знаете, работает сайт или нет, эффективна ли реклама.

### 5.2 Пошаговая регистрация Яндекс.Метрики (10 шагов)

```
ШАГ 1: Открыть https://metrica.yandex.ru/
ШАГ 2: Войти через Яндекс.Почту (если нет — создать за 1 минуту)
ШАГ 3: Нажать кнопку "Добавить счётчик"
ШАГ 4: Заполнить:
        - Название: "SorbGaz - УОГ сайт"
        - Адрес сайта: ваш домен (например sorbgaz.ru)
        - Часовой пояс: (UTC+03:00) Moscow
ШАГ 5: В настройках включить:
        [x] Вебвизор (запись действий посетителей)
        [x] Карта кликов
        [x] Аналитика форм (автоматически!)
        [x] Скроллкарта (как далеко листают)
        [x] Отложенная отправка данных (важно для GDPR/152-ФЗ)
ШАГ 6: Нажать "Установить код счётчика"
ШАГ 7: Скопировать код счётчика (выглядит так):
        <!-- Yandex.Metrika counter -->
        <script type="text/javascript" >
           (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
           ...;w[y](t)})(window, document,"yandex_metrika_callbacks");
        </script>
        <!-- /Yandex.Metrika counter -->
ШАГ 8: Сохранить номер счётчика (например: 12345678)
ШАГ 9: Вставить код в <head> каждой страницы сайта
ШАГ 10: Проверить: открыть сайт, подождать 5 мин, проверить в Метрике "Проверка номера счётчика"
```

### 5.3 Пошаговая регистрация Google Analytics 4 (GA4)

```
ШАГ 1: Открыть https://analytics.google.com/
ШАГ 2: Войти через Gmail (если нет — создать)
ШАГ 3: Нажать "Администрирование" (нижний левый угол) → "Создать ресурс"
ШАГ 4: Выбрать:
        - Тип платформы: Веб
        - URL сайта: ваш домен
        - Название потока данных: "SorbGaz Website"
        - Часовой пояс: Россия
ШАГ 5: Создать поток → получить ID измерения (G-XXXXXXXXXX)
ШАГ 6: Скопировать код gtag.js:
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        </script>
ШАГ 7: Вставить в <head> каждой страницы (ПОСЛЕ кода Метрики!)
ШАГ 8: Включить "Расширенная аналитика" (Enhanced Measurement) для автоматического отслеживания:
        - Просмотры страниц
        - Прокрутки
        - Исходящие клики
        - Взаимодействие с сайтом
        - Поиск по сайту
ШАГ 9: Связать GA4 с Google Search Console (для данных поиска)
ШАГ 10: Проверить: Realtime report в GA4 должен показать визиты
```

### 5.4 Готовый код для вставки в `<head>` (шаблон)

```html
<!-- === АНАЛИТИКА === -->
<!-- Яндекс.Метрика -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,
   a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
   ym(YOUR_YANDEX_ID, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true,
     webvisor:true, ecommerce:"dataLayer" });
</script><noscript><div><img src="https://mc.yandex.ru/watch/YOUR_YANDEX_ID" style="position:absolute; left:-9999px;" alt="" /></div></noscript>

<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA4_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA4_ID');
</script>
<!-- === /АНАЛИТИКА === -->
```

> **ЗАМЕНА:** `YOUR_YANDEX_ID` → ваш ID Метрики (8 цифр), `YOUR_GA4_ID` → ваш ID GA4 (G-XXXXXXXXXX)

### 5.5 Цели для Яндекс.Метрики (9 целей)

| № | Название | Тип | Условие |
|---|---|---|---|
| 1 | Отправка формы (главная) | JavaScript-событие | form-submit-main |
| 2 | Отправка формы (нижняя) | JavaScript-событие | form-submit-footer |
| 3 | Клик "Заказать расчёт" | Клик по ссылке | .btn-order |
| 4 | Клик "Скачать документацию" | Клик по ссылке | .btn-docs |
| 5 | Просмотр страницы продукции | Посещение страницы | /products.html |
| 6 | Просмотр страницы десульфуризации | Посещение страницы | /desulfurization.html |
| 7 | Просмотр страницы биогаза | Посещение страницы | /biogas.html |
| 8 | Скролл > 50% страницы | Scroll depth | 50% |
| 9 | Время на сайте > 3 мин | Время на сайте | 180 секунд |

### 5.6 Обновление Content-Security-Policy

Текущий CSP блокирует внешние скрипты. Нужно добавить домены аналитики:

```http
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'unsafe-inline'
    https://mc.yandex.ru
    https://metrika.yandex.ru
    https://www.googletagmanager.com
    https://www.google-analytics.com;
  img-src 'self' data: https:;
  connect-src 'self'
    https://mc.yandex.ru
    https://www.google-analytics.com;
  frame-src 'self';
  style-src 'self' 'unsafe-inline';
```

---

## 6. ИНТЕГРАЦИЯ BITRIX24

### 6.1 Что такое Bitrix24?

CRM-система для управления клиентами и сделками. Когда посетитель заполняет форму на сайте:
1. Данные автоматически попадают в Bitrix24
2. Создаётся ЛИД (новый потенциальный клиент)
3. Менеджер получает уведомление
4. Можно настроить автоОтвет и цепочку писем

### 6.2 Настройка вебхука Bitrix24 (инструкция)

```
ШАГ 1: Зайти в свой портал Bitrix24 (вашcompany.bitrix24.ru)
ШАГ 2: Открыть Приложения → Разработчикам → Другое → Входящий вебхук
ШАГ 3: Нажать "Добавить вебхук" → "Входящий"
ШАГ 4: Установить галочки прав:
        [x] CRM (добавление лидов, чтение)
        [x] Пользователи (чтение)
ШАГ 5: Скопировать сгенерированный URL webhook (выглядит так):
        https://вашcompany.bitrix24.ru/rest/12345/abcdefg...
ШАГ 6: Сохранить webhook URL в безопасном месте
```

### 6.3 Маппинг полей формы → поля лида Bitrix24

| Поле формы на сайте | Поле лида B24 | Код поля B24 |
|---|---|---|
| Имя (name) | Имя контакта | NAME |
| Телефон (phone) | Телефон | PHONE_WORK |
| Email (email) | Email | EMAIL_WORK |
| Сообщение (message) | Комментарий | COMMENTS |
| Источник | UTM-метки / страница | SOURCE_DESCRIPTION |

### 6.4 Готовый код интеграции (JavaScript)

```javascript
// Отправка формы в Bitrix24
// Разместить после получения webhook URL

const B24_WEBHOOK_URL = 'https://ВАШ_PORTAL.bitrix24.ru/rest/Ваш_ID/Ваш_Код/';
const B24_TITLE_TEMPLATE = 'Новый лид с сайта SorbGaz';

async function sendToBitrix24(formData) {
    const data = {
        fields: {
            TITLE: B24_TITLE_TEMPLATE,
            NAME: formData.name || '',
            PHONE: [{ VALUE: formData.phone || '', VALUE_TYPE: "WORK" }],
            EMAIL: [{ VALUE: formData.email || '', VALUE_TYPE: "WORK" }],
            COMMENTS: formData.message || '',
            SOURCE_ID: 'WEB',
            SOURCE_DESCRIPTION: `Страница: ${location.href}\nUTM Source: ${getUTM('utm_source')}`,
            UTM_SOURCE: getUTM('utm_source'),
            UTM_MEDIUM: getUTM('utm_medium'),
            UTM_CAMPAIGN: getUTM('utm_campaign'),
            UTM_TERM: getUTM('utm_term'),
            UTM_CONTENT: getUTM('utm_content'),
        },
        params: {"REGISTER_SONET_EVENT": "Y"}
    };

    try {
        const resp = await fetch(B24_WEBHOOK_URL + 'crm.lead.add.json', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        return await resp.json();
    } catch (e) {
        console.error('B24 error:', e);
        return null;
    }
}

function getUTM(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param) || '';
}
```

### 6.5 UTM-метки для отслеживания источников

При запуске рекламы использовать UTM-метки:

| Источник | utm_source | utm_medium | utm_campaign | utm_term |
|---|---|---|---|---|
| Яндекс.Директ | yandex | cpc | uog_desulfurization | десульфуризация |
| Google Ads | google | cpc | uog_biogas | очистка биогаза |
| Пост в VK | vk | social | uog_brand | — |
| Статья на Хабре | habr | referral | uog_article | — |
| Email-рассылка | email | newsletter | uog_digest | — |

---

## 7. ТЕХНИЧЕСКИЙ SEO-ЧЕКЛИСТ

### 7.1 robots.txt (готовый код)

```
User-agent: *
Allow: /
Disallow: /reference/
Disallow: /tmp_png.txt
Disallow: /parse_competitors.py
Disallow: /extract_docs.py
Disallow: /comparison.html
Disallow: /production-v*.html
Disallow: /png.html

# Sitemap
Sitemap: https://ВАШ_ДОМЕН/sitemap.xml

# Для Яндекса
User-agent: Yandex
Crawl-delay: 2
```

### 7.2 sitemap.xml (готовый код)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://ВАШ_ДОМЕН/</loc><lastmod>2026-04-02</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://ВАШ_ДОМЕН/about.html</loc><lastmod>2026-04-02</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://ВАШ_ДОМЕН/products.html</loc><lastmod>2026-04-02</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://ВАШ_ДОМЕН/desulfurization.html</loc><lastmod>2026-04-02</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://ВАШ_ДОМЕН/biogas.html</loc><lastmod>2026-04-02</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://ВАШ_ДОМЕН/landfill-gas.html</loc><lastmod>2026-04-02</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://ВАШ_ДОМЕН/industrial-sulfur-gases.html</loc><lastmod>2026-04-02</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://ВАШ_ДОМЕН/projects.html</loc><lastmod>2026-04-02</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://ВАШ_ДОМЕН/documentation.html</loc><lastmod>2026-04-02</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://ВАШ_ДОМЕН/production.html</loc><lastmod>2026-04-02</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>
</urlset>
```

### 7.3 Schema.org JSON-LD (готовый код для `<head>`)

```html
<!-- Schema.org Organization -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SorbGaz",
  "alternateName": "УОГ — Установки Очистки Газа",
  "url": "https://ВАШ_ДОМЕН/",
  "logo": "https://ВАШ_ДОМЕН/logo.png",
  "description": "Производитель модульных установок очистки газа от сероводорода (УОГ). Технология жидкофазного каталитического окисления.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "RU",
    "addressLocality": "Уфа"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+7-XXX-XXX-XX-XX",
    "contactType": "sales",
    "availableLanguage": ["Russian", "English"]
  },
  "sameAs": []
}
</script>

<!-- Schema.org Product (для desulfurization.html) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Установка очистки газа УОГ (десульфуризация)",
  "description": "Модульная установка десульфуризации газа методом жидкофазного каталитического окисления сероводорода",
  "brand": { "@type": "Brand", "name": "SorbGaz" },
  "category": "Gas Treatment Equipment",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "RUB",
    "seller": { "@type": "Organization", "name": "SorbGaz" }
  }
}
</script>

<!-- Schema.org BreadcrumbList -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://ВАШ_ДОМЕН/" },
    { "@type": "ListItem", "position": 2, "name": "Продукция", "item": "https://ВАШ_ДОМЕН/products.html" }
  ]
}
</script>
```

### 7.4 Open Graph + Twitter Cards (готовый код)

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="SorbGaz — УОГ" />
<meta property="og:locale" content="ru_RU" />

<!-- Для index.html -->
<meta property="og:title" content="УОГ — установки десульфуризации газа | SorbGaz" />
<meta property="og:description" content="Модульные установки очистки газа от сероводорода. Десульфуризация ПНГ, биогаза. Производительность 20–5000 нм³/ч." />
<meta property="og:image" content="https://ВАШ_ДОМЕН/images/og-image-main.jpg" />
<meta property="og:url" content="https://ВАШ_ДОМЕН/" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="УОГ — установки десульфуризации газа | SorbGaz" />
<meta name="twitter:description" content="Модульные установки очистки газа от сероводорода." />
<meta name="twitter:image" content="https://ВАШ_ДОМЕН/images/og-image-main.jpg" />
```

### 7.5 Hreflang (ru/en)

```html
<link rel="alternate" hreflang="ru" href="https://ВАШ_ДОМЕН/index.html" />
<link rel="alternate" hreflang="en" href="https://ВАШ_ДОМЕН/en/index.html" />
<link rel="alternate" hreflang="x-default" href="https://ВАШ_ДОМЕН/index.html" />
```

---

## 8. ПОЭТАПНЫЙ ПЛАН РЕАЛИЗАЦИИ

### Этап 1: Базовое SEO (1 день)

- [ ] Оптимизировать Title всех 10 страниц (согласно разделу 4.1)
- [ ] Написать уникальные Description для всех страниц (130-160 символов)
- [ ] Проверить и исправить H1 на всех страницах (1 H1 на страницу)
- [ ] Добавить ключевые слова-долгоящики в тексты (десульфуризация, абсорбция, скруббер)
- [ ] Улучшить alt-теги всех изображений (описательные, 10+ слов)

### Этап 2: Аналитика (0.5 дня + регистрация)

- [ ] Зарегистрировать Яндекс.Метрика (нужен аккаунт Яндекса)
- [ ] Зарегистрировать GA4 (нужен аккаунт Google)
- [ ] Вставить коды счётчиков в `<head>` всех страниц
- [ ] Настроить 9 целей в Метрике
- [ ] Обновить Content-Security-Policy
- [ ] Проверить работу обоих счётчиков

### Этап 3: Микроразметка и техническое SEO (1 день)

- [ ] Добавить Schema.org Organization (все страницы)
- [ ] Добавить Schema.org Product (desulfurization.html, products.html)
- [ ] Добавить Schema.org BreadcrumbList (все страницы кроме главной)
- [ ] Добавить Open Graph + Twitter Cards (все страницы)
- [ ] Добавить canonical URL (все страницы)
- [ ] Создать robots.txt
- [ ] Создать sitemap.xml
- [ ] Загрузить sitemap.xml в Яндекс.Вебмастер и Google Search Console

### Этап 4: Bitrix24 интеграция (когда будет портал)

- [ ] Создать входящий вебхук в Bitrix24
- [ ] Реализовать JavaScript-отправку форм в B24
- [ ] Настроить UTM-метки
- [ ] Настроить автоОтветы в B24
- [ ] Протестировать полный цикл: форма → лид → уведомление менеджера

### Этап 5: Мониторинг и оптимизация (постоянно)

**Неделя 1 после запуска:**
- [ ] Проверить индексацию в Яндекс/Google (site:домен)
- [ ] Проверить данные в Метрике и GA4
- [ ] Исправить ошибки индексации (если есть)

**Ежемесячно:**
- [ ] Анализировать позиции по целевым запросам
- [ ] Сравнивать с конкурентами (повторный парсинг раз в квартал)
- [ ] Корректировать контент на основе поведенческих факторов
- [ ] Отчёт для руководства (конверсия, источники трафика)

---

## ПРИЛОЖЕНИЯ

### A. Файлы проекта

| Файл | Описание |
|---|---|
| `research/competitor-seo-data.json` | Сырые данные парсинга конкурентов (42 KB) |
| `research/competitor-seo-analysis.md` | Анализ конкурентов с выводами |
| `SEO ключи.txt` | Исходный список ключевых слов |
| `список конкурентов.txt` | Исходный список конкурентов |
| `parse_competitors.py` | Python-скрипт парсинга |

### B. Ссылки для регистрации

| Сервис | Ссылка |
|---|---|
| Яндекс.Метрика | https://metrica.yandex.ru/ |
| Google Analytics 4 | https://analytics.google.com/ |
| Google Search Console | https://search.google.com/search-console |
| Яндекс.Вебмастер | https://webmaster.yandex.ru/ |
| Bitrix24 | https://www.bitrix24.ru/ |

### C. Контакт для вопросов по реализации

После утверждения этого плана я готов:
1. ✅ Внести все изменения в HTML-файлы сайта
2. ✅ Создать robots.txt и sitemap.xml
3. ✅ Добавить Schema.org, Open Graph, canonical во все страницы
4. ✅ Обновить CSP-заголовки
5. ⏳ Подключить аналитику (требует ваших регистраций в Метрике/GA4)
6. ⏳ Интегрировать Bitrix24 (требует ваш портал B24)