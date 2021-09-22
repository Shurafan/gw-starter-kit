
![template engine - twig](https://img.shields.io/static/v1?label=template&message=twig&color=%2300A95C&style=for-the-badge)
![node.js](https://img.shields.io/static/v1?label=&message=node&color=%23339933&style=for-the-badge&logo=node.js&logoColor=%23333)
![webpack](https://img.shields.io/static/v1?label=&message=webpack&color=%238DD6F9&style=for-the-badge&logo=webpack&logoColor=%23333)
![gulp](https://img.shields.io/static/v1?label=&message=gulp&color=%23CF4647&style=for-the-badge&logo=gulp&logoColor=%23333)
![babel](https://img.shields.io/static/v1?label=&message=babel&color=%23F9DC3E&style=for-the-badge&logo=babel&logoColor=%23333)
![bootstrap](https://img.shields.io/static/v1?label=&message=bootstrap&color=%237952B3&style=for-the-badge&logo=bootstrap&logoColor=%23333)
![sass](https://img.shields.io/static/v1?label=&message=sass&color=%23CC6699&style=for-the-badge&logo=sass&logoColor=%23333)
![javascript](https://img.shields.io/static/v1?label=&message=js&color=%23F7DF1E&style=for-the-badge&logo=javascript&logoColor=%23333)

# Gulp + Webpack starter kit - Окружение для разработки веб-проектов

Современный стартовый инструментарий для веб-разработки с использованием Gulp Task Runner и Webpack bundler.

Все задачи выполняются через Gulp. Webpack используется только для сборки Javascript.

![](src/assets/img/gwst.png)

## Требования к окружению

- node.js
- git

## Установка

### 1. Клонирование и инициализация

Скачайте файлы с github или клонируйте его c помощью команды:

```bash
git clone https://github.com/alexsoin/gw-starter-kit.git
```

Инициализация проекта(Работает только в UNIX системах)

```bash
./init
```

### 2. Установки зависимостей проекта

Для установки зависимостей проекта необходимо в командной строке ввести команды:

```bash
npm install
```

Если требуются дополнительные пакеты, то для их установки нужно выполнить команду:

- Установка пакета, при этом информация о нём, автоматически прописывается в секцию "devDependencies" файла "package.json" _(такие пакеты как gulp-autoprefixer)_

```bash
npm install --save-dev название_пакета
```

- Установка пакета, при этом информация о нём, автоматически прописывается в секцию "dependencies" файла "package.json" _(такие пакеты как bootstrap)_

```bash
npm install --save-prod название_пакета
```

### 3. Правка информации о новом проекте

1. Переходим в клонированную директорию
2. Удаляем папку `.git`
3. Редактируем файл `package.json`, меняем в нем параметры `name`, `description`, `author` и `repository.url` на свои значения.

## Как использовать окружение

### Режим живого сервера

- `npm run watch` - сборка и запуск live-server в режиме developer
- `npm run prodwatch` - сборка и запуск live-server в режиме production

### Режим сборки

- `npm run build` - сборка проекта в режиме production
- `npm run devbuild` - сборка проекта в режиме developer

### Список gulp задач:

- `gulp clean` - Очистка папки dist
- `gulp templates` - Создание html страниц
- `gulp styles` - Сборка файлов стилей css
- `gulp scripts` - Сборка javascript файлов
- `gulp fonts` - Перемещение шрифтов
- `gulp images` - Обработка картинок
- `gulp moveStatic` - Перемещение статических файлов
- `gulp createDeploy` - Создание файла **deploy.json** для настройки деплоя

### Деплой собранных файлов на сервер

- `npm run deploy` - Деплой собранных файлов на сервер, указанный как **default** в файле deploy.json
- `npm run deploy:dev` - Деплой собранных файлов на сервер, указанный как **dev** в файле deploy.json
- `npm run deploy:prod` - Деплой собранных файлов на сервер, указанный как **prod** в файле deploy.json

## Список инструментов

Окружение, предназначенное для разработки фронтенд проекта, построено на базе следующих инструментов:

- **node.js** (среды, в которой будет выполняться окружение);
- **npm** (пакетного менеджера, входящего в Node.js; будет использоваться для загрузки Gulp, плагинов и фронтенд пакетов);
- **popover, bootstrap** (пакеты, которые будут использоваться для сборки css и js частей сайта);
- **gulp и его плагины** (будут использоваться для сборки проекта и выполнения других веб задач).
- **webpack и его плагины** (будут использоваться для сборки js скриптов).

## Файловая структура Gulp проекта

### Корневая директория

В корне проекта расположены папки:

```bash
├── deploy.json                 # Конфигурация деплоя проекта
├── gulpfile.js                 # Конфигурация и задачи Gulpfile
├── init                        # Инициализатор проекта
├── dist/                       # Папка выгрузки проекта
├── src/                        # Исходники
│   ├── assets/                 # Хранятся стили, скрипты и тд
│   │   ├── fonts/              # Шрифтов
│   │   ├── img/                # Изображения
│   │   ├── js/                 # js-файлов
│   │   │   └── index.js        # Точка входа js файлов
│   │   └── scss/               # scss стили
│   │       ├── base.scss       # Пользовательские стили
│   │       ├── _bootstrap.scss # Подключение bootstrap стилей
│   │       ├── fonts.scss      # Подключение шрифтов
│   │       ├── index.scss      # Точка входа scss файлов
│   │       └── variables.scss  # Переменные стилей
│   ├── configs                 # Файлы конфигураций
│   │   ├── deploy.config.js    # Настройка деплоя
│   │   ├── paths.config.js     # Настройки путей проекта
│   │   ├── tasks.config.js     # Задачи gulp
│   │   ├── version.config.js   # Настройки для плагина gulp-version-number
│   │   └── webpack.config.js   # Настройки webpack
│   ├── data/                   # json файлы для вывода данных при разработке
│   │   ├── dev.json            # Вывод данных при develop разработке
│   │   ├── prod.json           # Вывод данных при production разработке
│   │   └── site.json           # Общий файл для вывода данных
│   └── views/                  # Для фрагментов twig файлов
│       ├── index.twig          # index.twig будет преобразован в index.html страницу
│       ├── layout/             # Шаблоны страницы
│       │   └── base.twig       # Базовый шаблон
│       └── partials/           # Части часто используемого кода на страницах
│           └── header.twig     # header
└── static/                     # Статичные файлы, которые будут просто перенесены в dist
```

### Директория src/js/

В папке `js` находится файл `index.js`, который является входной точкой для js файлов.

При сборке проекта, все импорты внешних зависимостей(таких как boostrap) будут собираться в файл `vendor.min.js`, а пользовательские скрипты будут собираться в файл `main.min.js`. Эти файлы после успешной сборки будут находиться в директории `dist/assets/js/`.

### Директория src/scss/

Папка `scss` отведена под стили. В данной директории находятся следующие файлы:

- `index.scss` - импорты файлов, содержимое которых необходимо включить в итоговый файл стилей
- `base.scss` - используется для написания своих стилей
- `variables.scss` - содержит SCSS переменные, с помощью которых будем изменять стили bootstrap, а также использовать его для создания своих переменных
- `fonts.scss` - подключаются шрифты, используемые на сайте
- `_bootstrap.scss` - подключаются boostrap зависимости

### Директория src/views/

В данной сборке используется шаблонизатор twig.

Файл `index.twig` - это главная страница создаваемого проекта. Кроме `index.twig` в данную директорию можно поместить и другие twig файлы из которых будут созданы html страницы.

В папке `layout` находятся шаблоны страниц.

В папке `partials` находятся фрагменты страниц. Это позволит более просто создавать и редактировать html страницы, т.к. отдельные части страниц уже будут находиться в специальных файлах.

Чтобы при показе результата сборки не приходилось сбрасывать кеш браузера изза устаревших стилей в данной сборке присутствует версионирование. При запуске команды `build` в html файлах у подключаемых js и css добавляется их версия.
