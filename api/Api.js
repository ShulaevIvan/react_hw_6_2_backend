const database = require('../database/Database');
koaBody = require('koa-body');

exports.getNotes = (ctx) => new Promise((resolve, reject) => {
    try {
      const result = {
        status: 'ok',
        notes: database.allNotes,
      };
      resolve(result);
    } catch (err) {
      reject(err);
    }
});

exports.createNote = (ctx) => new Promise((resolve, reject) => {
    try {
      const { content } = ctx.request.body;
      database.addNote(content);
      const result = {
        status: 'ok',
      };
      resolve(result);
    } catch (err) {
      reject(err);
    }
});

exports.deleteNote = (ctx) => new Promise((resolve, reject) => {
    try {
        database.removeNote(ctx);
        const result = {
            status: 'ok',
        }
        resolve(result);
    }
    catch (err) {
        reject(err)
    }
});