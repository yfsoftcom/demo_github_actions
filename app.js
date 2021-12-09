const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/api/foo', (ctx) => {
  ctx.body = {
      version: 1,
      hostname: 'xxx',
  };
});

app.use(router.routes()).use(router.allowedMethods());
module.exports = app;