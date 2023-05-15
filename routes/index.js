const combineRouters = require('koa-combine-routers');

const index = require('./index/Index');
const getNotes = require('./getNotes/GetNotes');
const createNote = require('./createNote/CreateNote');
const deleteNote = require('./deleteNote/DeleteNote');

const router = combineRouters(
  index,
  getNotes,
  createNote,
  deleteNote,
);

module.exports = router;