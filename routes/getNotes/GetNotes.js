const Router = require('koa-router');
const api = require('../../api/Api');

const router = new Router();
router.allowedMethods();

router.get('/notes', async (ctx) => {
    const result = await api.getNotes();
    ctx.response.body = result;
    ctx.response.status = 200;
});

module.exports = router;