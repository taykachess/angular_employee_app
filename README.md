# Описание

Тестовое задание по Angular

С использование только Angular, Angular Material, SCSS

Данные 2 сотрудников заранее хранятся в памяти, при перезагрузки SPA, данные этих сотрудников восстанавливаются, остальных удаляется. Проект симулирует реальное взаимодействие с сервером.

## Запуск сервера

ng serve --open

Demo: https://ang-empl-app.netlify.app

## Вопросы возникшие в ходе проекта

Можно ли в page component импортировать другой component напрямую, а не через app.module.ts (standalone?)

При использовании Validator в react form не происходит проверки валидации при нажатии кнопки (submit event), можно добавить в ручную валидацию, но выглядит как очень странное поведение)?

Как кастомизировать angular material, кроме как напрямую лезть через dev tools, искать классы, и с ними что-то делать?

TypeScript checking в формах, всмысле связь с model через typescript, ну чтобы не ошибиться с неймингом ?

Всегда ли в сервис методах нужно возвращать Observable, а в компонентах прослушивать их.

## TODO

Возможные улучшения этого проекта:

Заменить !important знак в global.scss, (переопределение стилей Angular Material theme)

Сделать пагинацию

Сделать валидацию формы

Связать с сервером

Обработка возможных ошибок
