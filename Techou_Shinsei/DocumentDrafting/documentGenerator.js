const LegalReferences = require('../TextBasedDatabase/legalReferences');

class DocumentGenerator {
    static generateDraft(application) {
        const legalData = LegalReferences.getLawById(application.lawId);
        const draft = `Draft for ${application.name} based on ${legalData.title}`;
        return draft;
    }
}

module.exports = DocumentGenerator;
