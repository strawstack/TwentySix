'use strict';

const fs = require('fs');
const util = require('util');

// require
let { Tokenizer } = require("./lib/tokenizer.js");
let { Lexer } = require("./lib/lexer.js");
let { Generator } = require("./lib/generator.js");

//
// test
//

let test = () => {
    let arg = process.argv[2];
    let name = arg.substr(0, arg.length - 5);
    let t = new Tokenizer(arg);
    let tokens = t.getTokens();

    //console.log("* tokens");
    //console.log(tokens);
    out(`output_files/tokenizer/${name}.json`, JSON.stringify(tokens, null, 2));
    //console.log("");

    let l = new Lexer(tokens);
    let ast = l.getAST();

    //console.log("* AST");
    //console.log(util.inspect(ast, {showHidden: false, depth: null}));
    out(`output_files/lexer/${name}.json`, JSON.stringify(ast, null, 2));
    //console.log("");

    let g = new Generator(ast);
    let code = g.getCode();

    //console.log("* code");
    //console.log(code);
    out(`output_files/generator/${name}.js`, code);
    //console.log("");

    // "Executable" file
    out(`run.js`, code);
};

if (process.argv.length > 2) {
    test();

} else {
    console.log("usage:\nnode main.js [filename]");
}

// write to file
function out(filename, msg) {
    fs.writeFile(filename, msg, function(err) {
        if(err) return console.log(err);
    });
}
