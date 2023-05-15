const Router = require('koa-router');
const api = require('../../api/Api');
koaBody = require('koa-body');

const router = new Router();
router.allowedMethods();

router.post('/notes', async (ctx) => {
    const result = await api.createNote(ctx);
    ctx.status = 201;
});

module.exports = router;