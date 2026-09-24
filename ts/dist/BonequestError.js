"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BonequestError = void 0;
class BonequestError extends Error {
    isBonequestError = true;
    sdk = 'Bonequest';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.BonequestError = BonequestError;
//# sourceMappingURL=BonequestError.js.map