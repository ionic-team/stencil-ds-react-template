const fs = require("fs-extra");
const path = require("path");

function copyCSS() {
  const src = path.join(__dirname, "..", "node_modules", "component-library", "css");
  const dst = path.join(__dirname, "..", "css");

  if (fs.existsSync(dst)) {
    fs.removeSync(dst);
  }
  if (fs.existsSync(src)) {
    fs.copySync(src, dst);
  } else {
    fs.mkdirSync(dst);
  }
}

function main() {
  copyCSS();
}

main();
