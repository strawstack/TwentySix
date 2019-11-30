'use strict';

class Generator {
    constructor(ast) {
        this.ast = ast;
        this.lines = []; // each line of the program
        this.names = {}; // name -> line
        this.current_line = -1;
    }

    prefix_globals(names) {
        // global state required for program interpretation
        let s = "";
        s += "const readlineSync = require('readline-sync');\n"
        s += `let pc = 0;\n`;
        let alph = "abcdefghijklmnopqrstuvw";
        s += `let ${alph.split("").join(" = ")} = 0;\n`
        s += `let x = y = [];\n`;
        s += 'let z = {};\n'
        s += `let names = {\n`;
        for (let name in this.names) {
            s += `  "${name}": ${this.names[name]},\n`;
        }
        s += `};\n`;
        s += `let resolveName = (x) => names[x];\n`
        return s;
    }

    fwrap(line) {
        return `  () => {${line}}`;
    }

    sufix_globals() {
        let s = "";
        s += `while (pc < lines.length) {\n`;
        s += `  lines[pc]();\n`
        s += `  pc += 1;\n`
        s += `}`;
        return s;
    }

    getCode() {
        let program = "let lines = [\n";
        for(let root of this.ast.children) {
            let line = this.getExpression(root);            
            if (line != false) {
                program += this.fwrap(line) + `, // ${this.current_line + 1}\n`;
                this.current_line += 1;
            }
        }
        return this.prefix_globals(this.names) + program + "];\n" + this.sufix_globals();
    }

    getExpression(root) {
        if (root.type == "function") {

            if (root.value == "A") {
                let e1 = this.getExpression(root.children[0]);
                let e2 = this.getExpression(root.children[1]);
                return `${e1} + ${e2}`;

            } else if (root.value == "B") {
                let e1 = this.getExpression(root.children[0]);
                let e2 = this.getExpression(root.children[1]);
                return `${e1}.push(${e2})`;

            } else if (root.value == "C") {
                let e1 = this.getExpression(root.children[0]);
                let e2 = this.getExpression(root.children[1]);
                return `(${e1} < ${e2})`;

            } else if (root.value == "D") {
                let e1 = this.getExpression(root.children[0]);
                let e2 = this.getExpression(root.children[1]);
                return `${e1} / ${e2}`;

            } else if (root.value == "E") {
                let e1 = this.getExpression(root.children[0]);
                let e2 = this.getExpression(root.children[1]);
                return `${e1} == ${e2}`;

            } else if (root.value == "F") {
                let e1 = this.getExpression(root.children[0]);
                return `(-1 * ${e1})`;

            } else if (root.value == "G") {
                let e1 = this.getExpression(root.children[0]);
                let e2 = this.getExpression(root.children[1]);
                return `${e1}[${e2}]`;

            } else if (root.value == "H") {
                return `process.exit()`;

            } else if (root.value == "I") {
                let e1 = this.getExpression(root.children[0]);
                let e2 = this.getExpression(root.children[1]);
                return `if(${e1}){${e2}}`;

            } else if (root.value == "J") {
                return `pc = resolveName("${root.children[0].value}") - 1`;

            } else if (root.value == "K") {
                let e1 = this.getExpression(root.children[0]);
                return `${e1}.pop()`;

            } else if (root.value == "L") {
                let e1 = this.getExpression(root.children[0]);
                let e2 = this.getExpression(root.children[1]);
                return `${e1} = ${e2}`;

            } else if (root.value == "M") {
                let e1 = this.getExpression(root.children[0]);
                let e2 = this.getExpression(root.children[1]);
                return `(${e1} % ${e2})`;

            } else if (root.value == "N") {
                this.names[root.children[0].value] = this.current_line + 1;
                return false;

            } else if (root.value == "O") {
                let e1 = this.getExpression(root.children[0]);
                return `${e1}.sort((a,b) => a - b)`;

            } else if (root.value == "P") {
                let e1 = this.getExpression(root.children[0]);
                return `console.log(${e1})`;

            } else if (root.value == "Q") {
                let e1 = this.getExpression(root.children[0]);
                return `Math.sqrt(${e1})`;

            } else if (root.value == "R") {
                return "readlineSync.question('')";

            } else if (root.value == "S") {
                let e1 = this.getExpression(root.children[0]);
                let e2 = this.getExpression(root.children[1]);
                let e3 = this.getExpression(root.children[2]);
                return `${e1}[${e2}] = ${e3}`;

            } else if (root.value == "T") {
                let e1 = this.getExpression(root.children[0]);
                let e2 = this.getExpression(root.children[1]);
                return `${e1} * ${e2}`;

            } else if (root.value == "U") {
                let e1 = this.getExpression(root.children[0]);
                let e2 = this.getExpression(root.children[1]);
                return `(${e1}.toString() + ${e2}.toString())`;

            } else if (root.value == "V") {
                let e1 = this.getExpression(root.children[0]);
                return `parseInt(${e1})`;

            } else if (root.value == "W") {
                let e1 = this.getExpression(root.children[0]);
                let e2 = this.getExpression(root.children[1]);
                let e3 = this.getExpression(root.children[2]);
                return `${e1}[${e2}] = ${e3}`;

            } else if (root.value == "X") {
                let e1 = this.getExpression(root.children[0]);
                let e2 = this.getExpression(root.children[1]);
                return `${e1} ^ ${e2}`;

            } else if (root.value == "Y") {
                return `Math.random()`;

            } else if (root.value == "Z") {
                let e1 = this.getExpression(root.children[0]);
                let e2 = this.getExpression(root.children[1]);
                return `${e1}.map((e, i) => [e, ${e2}[i]])`
            }

        } else if (root.type == "variable") {
            return root.value;

        } else if (root.type == "number") {
            return root.value;

        } else if (root.type == "string") {
            return `"${root.value}"`;

        }
    }
}

// exports
module.exports = {
    Generator
};
