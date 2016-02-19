const wJson = require("w-json")
    , packPath = require("package-json-path")
    ;

/**
 * writePackageJson
 * Writes the `package.json` content from the provided directory.
 *
 * @name writePackageJson
 * @function
 * @param {String} dir The path to the directory containing the `package.json` file.
 * @param {Function} callback The callback function.
 */
module.exports = function (dir, content, callback) {
    wJson(packPath(dir), content, callback);
};
