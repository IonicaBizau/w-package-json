const writePack = require("../lib");

writePack(__dirname, {
    name: "hello-world"
  , version: "1.0.0"
}, function (err, pack) {
    console.log(err || pack);
});
