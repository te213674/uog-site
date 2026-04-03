# Инструкция: Запуск сайта с аналитикой

## 1. Заменить ID Метрика/GA4/Bitrix24

### Яндекс.Метрика
1. Перейти на https://metrica.yandex.ru/
2. Создать счётчик для https://www.sorbgaz.ru/
3. Скопировать номер счётчика (8 цифр)
4. В файле `seo_fix/index.html` заменить:
   - `XXXXXXXX` → ваш ID Метрики

### Google Analytics 4
1. Перейти на https://analytics.google.com/
2. Создать ресурс + поток данных
3. Скопировать Measurement ID (G-XXXXXXXXXX)
4. В файле `seo_fix/index.html` заменить:
   - `G-XXXXXXXXXX` → ваш Measurement ID

### Bitrix24
1. Открыть ваш портал Битрикс24
2. Приложения → Вебхуки → Входящий вебхук
3. Скопировать URL webhook
4. Заменить в форме:
   - `https://BAU]_flOMEH.bitrix24.ru/rest/1/xxx/xxx/crm.lead.add` → ваш URL

---

## 2. Деплой

1. Скопировать все файлы из папки `seo_fix/` в корень сайта:
   ```
   seo_fix/index.html → корень/index.html
   seo_fix/robots.txt → корень/robots.txt
   seo_fix/sitemap.xml → корень/sitemap.xml
   ```

2. Не забыть скопировать папки:
   - `css/`
   - `js/`
   - `reference/`

3. Загрузить на хостинг по FTP/SFTP или через панель управления

---

## 3. Sitemap в консоли

### Google Search Console
1. Перейти на https://search.google.com/search-console/
2. Добавить сайт https://www.sorbgaz.ru/
3. Подтвердить права собственности
4. Sitemaps → Добавить новую карту сайта:
   ```
   https://www.sorbgaz.ru/sitemap.xml
   ```

### Яндекс.Вебмастер
1. Перейти на https://webmaster.yandex.ru/
2. Добавить сайт https://www.sorbgaz.ru/
3. Подтвердить права
4. Индексирование → Файлы Sitemap:
   ```
   https://www.sorbgaz.ru/sitemap.xml
   ```

---

## Быстрая проверка

После замены ID откройте index.html в браузере:
1. Откройте DevTools (F12)
2. Вкладка Network
3. Найдите запросы к:
   - `mc.yandex.ru` — Метрика
   - `google-analytics.com` — GA4

Если запросы уходят — аналитика работает!

---

## Контакты для поддержки

- Яндекс.Метрика: https://yandex.ru/support/metrica/
- Google Analytics: https://support.google.com/analytics/
- Bitrix24: https://helpdesk.bitrix24.ru/
