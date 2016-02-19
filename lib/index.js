const wJson = require("w-json")
    , packPath = require("package-json-path")
    ;

module.exports = function (dir, content, callback) {
    wJson(packPath(dir), content, callback);
};
