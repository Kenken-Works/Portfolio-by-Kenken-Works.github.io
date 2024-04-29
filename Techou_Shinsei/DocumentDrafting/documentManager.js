const fs = require('fs');

class DocumentManager {
    constructor() {
        this.documents = {};
    }

    saveDocument(name, content) {
        this.documents[name] = content;
        fs.writeFileSync(`./docs/${name}.txt`, content);
    }

    getDocument(name) {
        return this.documents[name] || 'Document not found';
    }
}

module.exports = DocumentManager;
