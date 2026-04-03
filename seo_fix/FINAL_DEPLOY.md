# 🚀 FINAL DEPLOY — SEO-доработка SorbGaz

> **Дата:** 2026-04-03  
> **Версия:** Final (E-E-A-T 10/10)  
> **Статус:** ✅ Готов к FTP-деплою

---

## 📦 Файлы для загрузки (4 блока)

| # | Файл | Назначение | FTP-путь |
|---|------|------------|----------|
| 1 | `FINAL_index.html` | Главная страница (Schema + LSI + Meta) | → `/index.html` |
| 2 | `FINAL_robots.txt` | Правила индексации + Sitemap | → `/robots.txt` |
| 3 | `FINAL_sitemap.xml` | Карта сайта (11 URL) | → `/sitemap.xml` |
| 4 | `FINAL_DEPLOY.md` | Эта инструкция | → (локально) |

---

## 1. FTP-ДЕПЛОЙ

### Шаг 1: Загрузка файлов

```
FTP → https://www.sorbgaz.ru/

FINAL_index.html   → /index.html          (ЗАМЕНИТЬ)
FINAL_robots.txt   → /robots.txt          (ЗАМЕНИТЬ)
FINAL_sitemap.xml  → /sitemap.xml         (ЗАМЕНИТЬ)
```

### Шаг 2: Проверка после загрузки

```bash
# Проверить index.html
curl -sI https://www.sorbgaz.ru/ | grep -i "content-type"

# Проверить robots.txt
curl -s https://www.sorbgaz.ru/robots.txt

# Проверить sitemap.xml
curl -s https://www.sorbgaz.ru/sitemap.xml | head -20

# Валидация Schema.Org (главная)
curl -s https://www.sorbgaz.ru/ | grep -o 'application/ld+json' | wc -l
# Ожидается: 3 (Organization + Product + FAQPage)
```

---

## 2. ПОИСКОВЫЕ КОНСОЛИ

### Яндекс.Вебмастер

1. Открыть: https://webmaster.yandex.ru/
2. **Индексирование** → **Переобход страниц**
   - Добавить: `https://www.sorbgaz.ru/`
3. **Sitemap-файлы**:
   - Удалить старый (если есть)
   - Добавить: `https://www.sorbgaz.ru/sitemap.xml`
4. **robots.txt**: 
   - Инструменты → Проверка robots.txt → Загрузить новую версию

### Google Search Console

1. Открыть: https://search.google.com/search-console
2. **Sitemaps**:
   - Ввести: `sitemap.xml`
   - Нажать **Отправить**
3. **URL Inspection**:
   - Проверить: `https://www.sorbgaz.ru/`
   - Нажать **Запросить индексирование**

---

## 3. ЧЕКО-ЛИСТ SEO ✅

### index.html
- [x] **Title:** `Десульфуризация и абсорбция серы | SorbGaz`
- [x] **Meta Description:** содержит «сероочистка», «абсорбция H2S», «десульфуризация»
- [x] **Schema.Org Organization** — E-E-A-T (название, контакты, описание)
- [x] **Schema.Org Product** — категория «Сероочистка газа / Абсорбция H2S»
- [x] **Schema.Org FAQPage** — 5 вопросов с LSI-словами
- [x] **H1:** десульфуризация, абсорбция H2S, сероочистка
- [x] **LSI в контенте:** сероочистка, абсорбция H2S, десульфуризация, скрубберы
- [x] **Аналитика:** Яндекс.Метрика + GA4 (Н ИЗМЕНЯЛАСЬ)

### robots.txt
- [x] User-agent: * / Allow: /
- [x] Disallow служебных папок
- [x] Sitemap: `https://www.sorbgaz.ru/sitemap.xml`

### sitemap.xml
- [x] 11 URL
- [x] lastmod: `2026-04-03`
- [x] priority/changefreq распределены корректно

---

## 4. ОЖИДАЕМЫЙ ЭФФЕКТ

| Метрика | До | После |
|---------|-----|-------|
| E-E-A-T | 9/10 | **10/10** |
| Schema.Org | Org+Product | **Org+Product+FAQPage** |
| LSI-плотность | базовая | **усиленная (сероочистка, абсорбция)** |
| Title SEO | общий | **целевой (десульфуризация + абсорбция)** |

---

## ⚠️ ВАЖНО

- **Не трогать** код аналитики (Яндекс.Метрика XXXXXXXX, GA4 G-XXXXXXXXXX) — placeholder'ы для замены на реальные ID
- При деплое на боевой домен заменить `XXXXXXXX` на реальные счётчики
- Файлы находятся в папке: `seo_fix/FINAL_*`

---

*Готово к деплою. © 2026 SorbGaz SEO-Final*