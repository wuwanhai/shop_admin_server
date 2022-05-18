const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
    ctx.body = '测试热更新!'
})

app.listen(8080)