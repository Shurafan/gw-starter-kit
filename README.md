
![template engine - twig](https://img.shields.io/static/v1?label=template&message=twig&color=%2300A95C&style=for-the-badge)
![node.js](https://img.shields.io/static/v1?label=&message=node&color=%23339933&style=for-the-badge&logo=node.js&logoColor=%23333)
![webpack](https://img.shields.io/static/v1?label=&message=webpack&color=%238DD6F9&style=for-the-badge&logo=webpack&logoColor=%23333)
![babel](https://img.shields.io/static/v1?label=&message=babel&color=%23F9DC3E&style=for-the-badge&logo=babel&logoColor=%23333)
![bootstrap](https://img.shields.io/static/v1?label=&message=bootstrap&color=%237952B3&style=for-the-badge&logo=bootstrap&logoColor=%23333)
![sass](https://img.shields.io/static/v1?label=&message=sass&color=%23CC6699&style=for-the-badge&logo=sass&logoColor=%23333)
![javascript](https://img.shields.io/static/v1?label=&message=js&color=%23F7DF1E&style=for-the-badge&logo=javascript&logoColor=%23333)

# PEPELAC - frontend boilerplate

![logo](https://user-images.githubusercontent.com/3787132/176785257-2fa84f95-acc2-4ecb-a5af-df0efaf571d3.svg)

PEPELAC - Современный инструментарий для вёрстки и создания статичных сайтов с использованием Webpack.

*Ранее проект назывался gw-starter-kit*.

## Требования к окружению

- node.js
- git

## Установка

### 1. Клонирование и инициализация

Скачайте файлы с github или клонируйте его c помощью команды:

```bash
git clone https://github.com/alexsoin/pepelac.git
```

Инициализация проекта(Работает только в UNIX системах)

```bash
./init
```

### 2. Установки зависимостей проекта

Для установки зависимостей проекта необходимо в командной строке ввести команды:

```bash
npm i
```

Если требуются дополнительные пакеты, то для их установки нужно выполнить команду:

- Установка пакета, при этом информация о нём, автоматически прописывается в секцию "devDependencies" файла "package.json"

```bash
npm i -D название_пакета
```

- Установка пакета, при этом информация о нём, автоматически прописывается в секцию "dependencies" файла "package.json"

```bash
npm i название_пакета
```

### 3. Правка информации о новом проекте

1. Переходим в клонированную директорию
2. Удаляем папку `.git`

## Как использовать окружение

### Режим живого сервера

- `npm run watch` - сборка и запуск live-server в режиме developer
- `npm run watch:prod` - сборка и запуск live-server в режиме production

### Режим сборки

- `npm run build` - сборка проекта в режиме developer
- `npm run build:prod` - сборка проекта в режиме production

### Деплой собранных файлов на сервер

- `npm run deploy` - Деплой собранных файлов на сервер, указанный как **default** в файле deploy.json
- `npm run deploy:dev` - Деплой собранных файлов на сервер, указанный как **dev** в файле deploy.json
- `npm run deploy:prod` - Деплой собранных файлов на сервер, указанный как **prod** в файле deploy.json

## Список инструментов

Окружение, предназначенное для разработки фронтенд проекта, построено на базе следующих инструментов:

- **node.js** (среды, в которой будет выполняться окружение);
- **npm** (пакетного менеджера, входящего в Node.js; будет использоваться для загрузки Gulp, плагинов и фронтенд пакетов);
- **popover, bootstrap** (пакеты, которые будут использоваться для сборки css и js частей сайта);
- **webpack и его плагины** (будут использоваться для сборки js скриптов).

## Файловая структура Gulp проекта

### Корневая директория

В корне проекта расположены папки:

```bash
├── init                              # Инициализатор проекта
├── deploy.json                       # Конфигурация для деплоя проекта
├── src/                              # Исходники
│   ├── assets/                       # Общий каталог хранения скриптов, стилей, шрифтов и изображений
│   │   ├── fonts/                    # Шрифты
│   │   ├── img/                      # Изображения
│   │   ├── js/                       # js-файлы
│   │   │   └── index.js              # Точка входа js файлов
│   │   └── scss/                     # scss стили
│   │       ├── base.scss             # Пользовательские стили
│   │       ├── fonts.scss            # Подключение шрифтов
│   │       ├── index.scss            # Точка входа scss файлов
│   │       └── variables.scss        # Переменные стилей
│   ├── configs/                      # Файлы конфигураций
│   │   ├── deploy.config.js          # Настройка деплоя
│   │   ├── paths.config.js           # Настройки путей проекта
│   │   ├── webpack.config.babel.js   # Настройки webpack default
│   │   ├── webpack.dev.babel.js      # Настройки webpack dev
│   │   └── webpack.prod.babel.js     # Настройки webpack prod
│   ├── data/                         # Массивы данных для вывода значений при разработке
│   │   ├── dev.js                    # Вывод данных при develop разработке
│   │   ├── prod.js                   # Вывод данных при production разработке
│   │   └── site.js                   # Общий файл для вывода данных
│   └── views/                        # twig файлы, которые затем преобразуются в html
│       ├── 404.twig                  # Страница ошибки 404
│       ├── index.twig                # Главная страница
│       ├── kit.twig                  # Типографика
│       ├── layout/                   # Шаблоны страниц
│       ├── partials/                 # Подключаемые куски кода
│       └── ui.twig                   # Список страниц сайта
└── static/                           # Статичные файлы, которые будут просто перенесены в dist
```

### Директория `src/assets/js/`

В папке `js` находится файл `index.js`, который является входной точкой для js файлов.

При сборке проекта, все импорты внешних зависимостей(таких как boostrap) будут собираться в файл `vendor.min.js`, а пользовательские скрипты будут собираться в файл `main.min.js`. Эти файлы после успешной сборки будут находиться в директории `dist/assets/js/`.

### Директория `src/assets/scss/`

Папка `scss` отведена под стили. В данной директории находятся следующие файлы:

- `index.scss` - импорты файлов, содержимое которых необходимо включить в итоговый файл стилей
- `base.scss` - используется для написания своих стилей
- `variables.scss` - содержит SCSS переменные, с помощью которых будем изменять стили bootstrap, а также использовать его для создания своих переменных
- `fonts.scss` - подключаются шрифты, используемые на сайте
- `helpers/bootstrap.scss` - подключаются boostrap зависимости

### Директория `src/assets/views/`

В данной сборке используется шаблонизатор twig.

Файл `index.twig` - это главная страница создаваемого проекта. Кроме `index.twig` в данную директорию можно поместить и другие twig файлы из которых будут созданы html страницы.

В папке `layout` находятся шаблоны страниц.

В папке `partials` находятся фрагменты страниц. Это позволит более просто создавать и редактировать html страницы, т.к. отдельные части страниц уже будут находиться в специальных файлах.

Чтобы при показе результата сборки не приходилось сбрасывать кеш браузера изза устаревших стилей в данной сборке присутствует версионирование. При запуске команды `build` в html файлах у подключаемых js и css добавляется их версия.
