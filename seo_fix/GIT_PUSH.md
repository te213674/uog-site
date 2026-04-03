# 🚀 GIT PUSH — SEO-финализация SorbGaz

> **Дата:** 2026-04-03  
> **Версия:** Final (E-E-A-T 10/10)  
> **Репо:** `https://github.com/te213674/uog-site.git`

---

## ✅ Что сделано

### 1. Файлы обновлены в корне (из seo_fix/FINAL_* → корень)
| Файл | Изменение |
|------|-----------|
| `index.html` | Title=`Десульфуризация и абсорбция серы \| SorbGaz`, Schema.Org (Org+Product+FAQPage), LSI (сероочистка, абсорбция H2S) |
| `robots.txt` | Sitemap URL добавлен |
| `sitemap.xml` | 11 URL, lastmod=2026-04-03 |

### 2. .gitignore обновлён
Добавлены исключения для тяжёлых файлов:
- `УОГ видео/`, `reference/`, `*.doc`, `*.docx`, `*.xls`, `*.xlsx`
- `Gas/`, `Gaz/`, `parse_competitors.py`, `extract_docs.py`
- `tmp_png.txt`, `список конкурентов.txt`, `SEO ключи.*`

### 3. Аналитика — НЕ тронута
Яндекс.Метрика + GA4 код остался 1-в-1 как был.

---

## 📋 Команда Git (выполнить)

```bash
cd "c:\Users\User\YandexDisk\Документы\Documents\для сайта\УОГсайт VSCode"

git add .gitignore index.html robots.txt sitemap.xml seo_fix/
git status
git commit -m "SEO-final: Schema.Org FAQ+Org+Product, LSI сероочистка/абсорбция H2S, title update"
git push origin main
```

---

## 🧪 Проверка после push

```bash
# Убедиться что на гите только лёгкие файлы
git ls-files | head -30

# Проверить что тяжёлые папки НЕ в гите
git ls-files | grep -E "(УОГ видео|reference/|\.doc)" 
# Должно быть пусто!
```

---

## 📁 Что попадёт на GitHub

✅ **Будет залито:**
- `index.html`, `about.html`, `products.html`, `production.html`, `comparison.html`, `projects.html`, `biogas.html`, `desulfurization.html`, `documentation.html`, `industrial-sulfur-gases.html`, `landfill-gas.html`, `png.html`
- `css/main.css`, `js/main.js`, `js/production.js`
- `robots.txt`, `sitemap.xml`, `.gitignore`
- `seo_fix/` (все файлы включая FINAL_*)
- `research/*.md`, `rules/*.md`, `план работы/*.md`
- `.vscode/settings.json`

❌ **НЕ будет залито (тяжёлые):**
- `УОГ видео/` (.mp4, .jpg)
- `reference/` (документы, фото)
- `*.doc`, `*.docx`, `*.xls`, `*.xlsx`
- `Gas/`, `Gaz/`
- Скрипты парсинга

---

*Готово к git push. © 2026 SorbGaz SEO-Final*