# Gulp: scss, webp, html, js, optimized
Основа для проекта с использованием scss. Все изображения переводятся в webp + оптимизация. Сжимаются стили,js файлы. Есть функционал создания спрайтов SVG

# Инструкция #
+ npm i - установка всех пакетов проекта
+ npm run dev - запуск сборки разработки. Оптимизационные функцию отключены
+ npm run build - запуск сборки продакшена с оптимизацией всего
+ npm run deployZIP - сохранение продакшн сборки в архив
+ npm run deployFTP - заливка продакшн сборки на фтп
+ gulp svgSpriteIcons  - создание спрайта SVG

---
Настройки подключения FTP:  gulp\config\ftp.js
---
Настройка пути сохранения файлов на FTP: gulp\config\ftp.js и gulp\tasks\ftp.js (во втором файле настраивается вложенность. В данном примере будет кидаться прямо в корень, так как переменная path в первом файле пустая
# Работа #
При запуске происходит удаление содержимого папки DIST. Потом поэтапно, как указано в файле gulpfile.js срабатывают различные таски (в основном - удаление, создание шрифтов, копирование файлов, склеивание html файлов, преобразование scss, js, оптимизация изображений). Присутствует проверка поддерживаемости webp браузерами - в зависимости от этого будут подключаться в style.css webp или исходные фото


<pre>
    <code>
    <picture>
        <source srcset="@img/NAME_PICTURE-sm.webp" media="(max-width: 640px)" type="image/webp" />
        <source srcset="@img/NAME_PICTURE-md.webp" media="(max-width: 768px)" type="image/webp" />
        <source srcset="@img/NAME_PICTURE-lg.webp" media="(max-width: 1024px)" type="image/webp" />
        <source srcset="@img/NAME_PICTURE.webp" type="image/webp" />
        <img src="@img/NAME_PICTURE.jpg" class="" alt="" />
    </picture>

    </code>
</pre>
