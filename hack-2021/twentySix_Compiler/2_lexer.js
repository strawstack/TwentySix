// lexer: adds extra context to tokens (number, literal, operator, line numbers)

const defaultRules = {
    symbol: /^([a-z]{1,3}|[A-Z])$/, // 1 to 3 lower case letters or a single upper case letter
    number: /^[0-9]+(\.[0-9]+)?$/, // digits, decimal point, more digits
    string: /^"[^"]+"$/,
    new_line: /\n/
};

function lexer(tokenList, rules = defaultRules) {
    let lexList = tokenList.slice();

    let lineNumber = 1;
    for (let index in tokenList) {

        // Add attributes to token
        lexList[index] = matchRules(tokenList[index]);
        
        // Advance line number if token is newline
        if (tokenList[index].match((rules["new_line"]))) {
            lineNumber += 1;
        }
    }

    function matchRules(token) {
        for (let name in rules) {
            let regex = rules[name];
            
            if (token.match(regex)) {
                return {
                    type: name,
                    line: lineNumber,
                    token: token
                }
            }
        }
        return {
            type: null,
            line: lineNumber,
            token: token
        }
    }

    return lexList;
}

export default lexer;