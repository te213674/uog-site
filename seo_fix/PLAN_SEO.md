# План SEO-аналитика от GLM 5V Turbo

> Model ID: minimax/minimax-m2.7
> Temperature: 0.1
> Дата: 03.04.2026

---

## Содержание

1. [Текущее состояние](#1-текущее-состояние)
2. [Аналитика](#2-аналитика)
3. [CRM интеграция](#3-crm-интеграция)
4. [SEO оптимизация](#4-seo-оптимизация)
5. [Деплой](#5-деплой)

---

## 1. Текущее состояние

### Проблемы:
- ❌ Яндекс.Метрика: ID не настроен (placeholder `XXXXXXXX`)
- ❌ Google Analytics 4: ID не настроен (placeholder `G-XXXXXXXXXX`)
- ❌ Bitrix24: webhook не настроен
- ✅ Schema.org: Organization + Product
- ✅ Open Graph + Twitter Cards
- ✅ robots.txt + sitemap.xml

### SEO-ключи:
```
абсорбция серы, десульфуризация, биогаз очистка, очистка ПНГ, скрубберы газов
```

---

## 2. Аналитика

### Яндекс.Метрика
```html
<!-- Яндекс.Метрика -->
<script type="text/javascript">
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=XXXXXXXX', 'ym');

    ym(XXXXXXXX, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/XXXXXXXX" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
```

### Google Analytics 4
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Цели:
| ID | Название | Событие |
|----|----------|---------|
| 1 | FORM_SUBMIT_MAIN | Отправка основной формы |
| 2 | FORM_SUBMIT_ANALYSIS | Отправка формы анализа газа |

---

## 3. CRM интеграция

### Bitrix24 webhook:
```
https://ВАШ_ДОМЕН.bitrix24.ru/rest/1/xxx/xxx/crm.lead.add
```

### Что передаётся:
- Имя, Телефон, Email
- Компания, Комментарий
- UTM-метки (utm_source, utm_medium, utm_campaign, utm_term, utm_content)

---

## 4. SEO оптимизация

### Meta tags:
- Title: УОГ — установки десульфуризации газа | очистка ПНГ, биогаз, скрубберы | SorbGaz
- Description: Производитель установк очистки газа УОГ от сероводорода. Десульфуризация ПНГ, биогаза, свалочного газа. Модули 20–5000 нм³/ч. Запросить КП →
- Canonical: https://www.sorbgaz.ru/

### Sitemap:
Главная + услуги + продукция + кейсы + контакты

---

## 5. Деплой

### Шаги:
1. Заменить `XXXXXXXX` на ID Яндекс.Метрики
2. Заменить `G-XXXXXXXXXX` на Measurement ID GA4
3. Заменить Bitrix24 webhook URL
4. Загрузить на хостинг
5. Добавить sitemap.xml в Google Search Console
6. Добавить sitemap.xml в Яндекс.Вебмастер

---

## Файлы проекта

| Файл | Описание |
|------|----------|
| `seo_fix/index.html` | Главная с аналитикой |
| `seo_fix/robots.txt` | robots.txt для B2B |
| `seo_fix/sitemap.xml` | Sitemap |
| `seo_fix/PLAN_SEO.md` | Этот план |
| `seo_fix/INSTRUKCIYA.md` | Инструкция по запуску |
