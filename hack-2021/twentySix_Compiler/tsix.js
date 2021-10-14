// compiler: takes a program as a string as input. Runs the string through the tokenizer, lexer, parser, and generator
// to output executable code

import * as fs from 'fs';
import tokenizer from './1_tokenizer.js';
import lexer from './2_lexer.js';
import parser from './3_parser.js';

// Get the input filePath
if (process.argv.length > 2) {
    const filePath = process.argv[2];
    fs.promises.readFile(filePath)
        .then(data => tsix(data.toString('utf-8')))
        .catch(e => { console.log(e) });
} else {
    console.log("Usage: node tsix.js [filePath]");
}

// Define the compiler chain
function tsix(inputStr) {
    let tokenList = tokenizer(inputStr);
    
    let lexList = lexer(tokenList);

    let parseTree = parser(lexList);

    console.log(parseTree);
}