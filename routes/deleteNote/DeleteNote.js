const Router = require('koa-router');
const api = require('../../api/Api');

const router = new Router();
router.allowedMethods('DELETE');

router.delete('/notes/:id', async (ctx) => {
    const { id } = ctx.params;
    const result = await api.deleteNote(id);
    ctx.response.body = 'no content 204';
});



module.exports = router;