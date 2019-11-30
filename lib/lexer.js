'use strict';

class Lexer {
    constructor(tokens) {
        this.tokens = tokens;
        this.root = {
            type: "program",
            children: []
        };
        this.parent = this.root;

        this.childCount = {
            "A": 2, "B": 2, "C": 2, "D": 2, "E": 2,
            "F": 1, "G": 2, "H": 0, "I": 2, "J": 1,
            "K": 1, "L": 2, "M": 2, "N": 1, "O": 1,
            "P": 1, "Q": 1, "R": 0, "S": 3, "T": 2,
            "U": 2, "V": 2, "W": 2, "X": 2, "Y": 0,
            "Z": 2
        };
    }
    remove_parent_prop(root) {
        delete root.parent;
        if (root.children) {
            for (let c of root.children) {
                this.remove_parent_prop(c);
            }
        }
    }
    getAST() {
        for (let token of this.tokens) {

            if (token.type == "newline") {
                this.parent = this.root;

            } else if (this.parent.type == "program") {
                token.parent   = this.parent;
                token.children = [];
                this.parent.children.push(token);
                this.parent = token;

            } else {
                if (token.type == "function") {
                    token.parent   = this.parent;
                    token.children = [];
                    token.parent.children.push(token);
                    this.parent = token;

                } else {
                    token.parent = this.parent;
                    token.parent.children.push(token);

                    // the parent token was a function
                    // and now has enough arguments
                    if (token.parent.children.length == this.childCount[token.parent.value]) {
                        this.parent = token.parent.parent;
                    }
                }
            }
        }
        for (let c of this.root.children) {
            this.remove_parent_prop(c);
        }
        return this.root;
    }
}

module.exports = {
    Lexer
}
