import replace from "gulp-replace";//поиск и замена (например для @img)
import plumber from "gulp-plumber";//обработка ошибок
import notify from "gulp-notify";// подсказки
import browsersync from "browser-sync";
import newer from "gulp-newer";//проверка обновления - чтоб каждый раз не пересоздавать одну и туже картинку
import ifPlugin from "gulp-if";//условное ветвление 


export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin,
}