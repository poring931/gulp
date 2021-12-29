import dartSass from 'sass';
import guplSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css';//сжатие файла
import webpcss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQuerries from 'gulp-group-css-media-queries';

const sass = guplSass(dartSass)

export const scss = () => {
    return app.gulp.src(app.path.src.scss,{ sourcemapps: app.isDev })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(
        app.plugins.if(
            app.isBuild,
            groupCssMediaQuerries()
        )
    )
    .pipe(
        // app.plugins.if(
            // app.isBuild,
            webpcss({
                webpClass: ".webp",
                noWebpClass: ".no-webp"
            })
        // )
    )
    .pipe(
        app.plugins.if(
            app.isBuild,
            autoprefixer({
                grid: true,
                overrideBrowserslist:["last 3 versions"],
                cascade: true
            })
        )
    )
    .pipe(app.gulp.dest(app.path.build.css))//раскоментировать, если нужен второй файл стилей не сжатый
    .pipe(
        app.plugins.if(
            app.isBuild,
            cleanCss()
        )
    )
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream())
}