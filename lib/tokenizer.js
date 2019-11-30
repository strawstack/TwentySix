'use strict';

const fs = require('fs');

let state = {
    NORMAL: 0,
    STRING: 1,
    NUMBER: 2,
    NAME: 3
};

class Tokenizer {
    constructor(filename) {
        this.content = fs.readFileSync(filename, 'utf8');

        this.upper = {}
        this.lower = {}
        for (let c of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
            this.upper[c] = true;
            this.lower[c.toLowerCase()] = true;
        }

        this.number = {}
        for (let c of "0123456789") {
            this.number[c] = true;
        }

        this.state = state.NORMAL;
        this.collected_value = "";
    }

    getTokens() {

        let tokens = [];

        for (let c of this.content) {

            // ongoing state ends
            if (this.state == state.NUMBER && !(c in this.number)) {
                tokens.push({
                    "type": "number",
                    "value": parseInt(this.collected_value)
                });
                this.collected_value = "";
                this.state = state.NORMAL;

            } else if (this.state == state.NAME && !(c in this.lower)) {
                tokens.push({
                    "type": (this.collected_value.length > 1) ? "name" : "variable",
                    "value": this.collected_value
                });
                this.collected_value = "";
                this.state = state.NORMAL;
            }

            // respond to next character
            if (this.state == state.STRING) {
                if (c == "\'") {
                    tokens.push({
                        "type": "string",
                        "value": this.collected_value
                    });
                    this.collected_value = "";
                    this.state = state.NORMAL;            

                } else {
                    this.collected_value += c;
                }

            } else if (c == "\'") {
                this.state = state.STRING;

            } else if (c == " ") {
                // skip

            } else if (c == "\n") {
                tokens.push({
                    "type": "newline",
                    "value": "\n"
                });

            } else if (c in this.upper) {
                tokens.push({
                    "type": "function",
                    "value": c
                });

            } else if (c in this.lower) {
                if (this.state == state.NAME) {
                    this.collected_value += c;

                } else {
                    this.state = state.NAME;
                    this.collected_value = c;
                }

            } else if (c in this.number) {
                if (this.state == state.NUMBER) {
                    this.collected_value += c;

                } else {
                    this.state = state.NUMBER;
                    this.collected_value = c;
                }

            }
        }
        return tokens;
    }
};

//
// test
//
/*
let arg = process.argv[2];
let t = new Tokenizer(arg);
let tokens = t.getTokens();
console.log(tokens); */

// exports
module.exports = {
    Tokenizer
};
