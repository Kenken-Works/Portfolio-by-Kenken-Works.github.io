//法律、規則、判例データベース管理とデータ取得。
const fs = require('fs');
const path = require('path');

class LegalReferences {
    constructor() {
        this.filePath = path.join(__dirname, 'legal_data.json');
        this.legalData = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
    }

    static getLawById(lawId) {
        return this.legalData.laws.find(law => law.id === lawId) || { error: "Law not found." };
    }

    static getRegulationById(regulationId) {
        return this.legalData.regulations.find(regulation => regulation.id === regulationId) || { error: "Regulation not found." };
    }

    static getCaseById(caseId) {
        return this.legalData.caselaws.find(case => case.id === caseId) || { error: "Case not found." };
    }
}

module.exports = LegalReferences;
