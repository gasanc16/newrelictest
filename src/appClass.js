module.exports = class App {
    constructor(name, contributors, version, apdex, host) {
        this.name = name || '';
        this.contributors = contributors || [];
        this.version = version || 0;
        this.apdex = apdex || 0;
        this.host = host || [];
    }
};
