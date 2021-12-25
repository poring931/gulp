export const server = (done) =>{
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}`
        },
        notify: true,
        port: 3040
    })
}