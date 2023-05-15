class Database {
    constructor() {
        this.allNotes = [];
        this.id = 1;
    }

    incrementId() {
        this.id += 1;
        return this.id;
    }

    addNote(content) {
        this.obj = {
            id: this.id,
            content: content,
        }
        this.allNotes.push(this.obj);
        this.incrementId();
    }

    removeNote(id) {
        this.allNotes = this.allNotes.filter((item) => item.id !== Number(id));
    }
}

const database = new Database();


module.exports = database;