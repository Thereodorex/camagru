# Сamagru
Web project of 21 school (ecole 42).

## Описание проекта

Один из первых web-проектов в школе 42. Задача заключается в том, чтобы написать простую социальную сеть с возможностью обмена фотографиями (как instagram). Изначально выполнялся на языке php и js/html/css. На момент выполнения можно было использовать любой язык для backend части приложения. Фреймворки запрещены.

## Мотивация
- Написать первое приложени на nodejs и mongodb
- Укрепить навыки frontend разработки на чистом javascript (без фреймфорков)
- Познакомиться с базовыми концепциями безопасности web-приложений

## Детали проекта

Должны быть реализованы следующие возможности:
- регистрация с подтверждением по почте
- авторизация
- восстановление пароля по почте
- возможность менять username, пароль и почту
***
- возможность сделать снимок экрана/загрузить файл с изображением
- возможность добавить к полученному изображению ддополнительные элементы (другую картинку или смайлик, например)
- загруженные изображения видны всем пользователям
- можно удалять свои изображения
***
- можно ставить лайки и комментировать изображения
- автор изображения получает уведомление по почте об оставленных комментариях
- можно отключить уведомления по почте в настройках
- сортировка списка изображений по дате добавления
- отображения с пагинацией

В проекте не должно быть:
- незашифрованных паролей в базе данных
- возможности HTML инъекций
- возможности SQL инъекций

Бонусные фичи:
- асинхронное взаимодействие с сервером
- бесконечная пагинация (мне не нравится такой визуальный эффект, но, согласно заданию, это является бонусом)
