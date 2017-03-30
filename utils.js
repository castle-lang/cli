const ts = require('typescript');
const fs = require('fs');

exports.transpile = (source) => {
    return ts.transpileModule(source, {
        compilerOptions: { module: ts.ModuleKind.CommonJS }
    }).outputText;
}

exports.copyFile = (src, dest) => {
    const content = fs.readFileSync(src);
    fs.writeFileSync(dest, content);
}

exports.info = (msg) => {
    console.log(`${'INFO'.blue}: ${msg}`);
}

exports.warn = (msg) => {
    console.log(`${'WARN'.yellow}: ${msg}`);
}

exports.error = (msg) => {
    console.log(`${'ERROR'.red}: ${msg}`);
    process.exit(1);
}
