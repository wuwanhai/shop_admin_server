// routers/blog.js

const router = require('koa-router')();

router.get('/', async (ctx) => {
  ctx.body = `我是登录id: ${
      {data:ctx.query.id}}`;
});

// 动态路由
router.get('/:id', async (ctx) => {
  ctx.body = `登录接口: ${ctx.params.id}`;
});

router.post('/', async (ctx) => {
  ctx.body = {user_info:{id:11,account:'132',head_pic:'123.jpg'}};
});

router.put('/:id', async (ctx) => {
  ctx.body = `PUT: ${ctx.params.id}`;
});

router.del('/:id', async (ctx) => {
  ctx.body = `DEL: ${ctx.params.id}`;
});

module.exports = router;