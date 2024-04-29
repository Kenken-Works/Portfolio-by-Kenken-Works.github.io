//法的要件のチェックを行うモジュール。legalReferences.js からデータを取得。
const LegalReferences = require('../TextBasedDatabase/legalReferences');

class ComplianceChecker {
    static checkCompliance(application) {
        const lawDetails = LegalReferences.getLawById(application.lawId);
        return lawDetails.compliant;
    }
}

module.exports = ComplianceChecker;
