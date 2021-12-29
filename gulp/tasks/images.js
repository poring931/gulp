import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';
import sharpResponsive from 'gulp-sharp-responsive';




export const images = () => {
    return app.gulp.src(app.path.src.images)
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "IMAGES",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(app.plugins.newer(app.path.build.images))
   .pipe(sharpResponsive({
        includeOriginalFile: true,
        formats: [
    
        // webp
        { width: 560, format: "webp", rename: { suffix: "-sm" } },
        { width: 768, format: "webp", rename: { suffix: "-md" } },
        { width: 1024, format: "webp", rename: { suffix: "-lg" } },
        // avif
        // { width: 560, format: "avif", rename: { suffix: "-sm" } },
        // { width: 768, format: "avif", rename: { suffix: "-md" } },
        // { width: 1024, format: "avif", rename: { suffix: "-lg" } },
        ]
    }))
    .pipe(
        webp()
    )
    .pipe(
        app.plugins.if(
            app.isBuild,
           app.gulp.dest(app.path.build.images)
        )
    )
    .pipe(
        app.plugins.if(
            app.isBuild,
           app.gulp.src(app.path.src.images)
        )
    )
    .pipe(
        app.plugins.if(
            app.isBuild,
        app.plugins.newer(app.path.build.images)
        )
    )
    .pipe(
        app.plugins.if(
            app.isBuild,
            imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                interlaced: true,
                optimizationlevel:3 //0 to 7
            })
        )
    )
    
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
   
}