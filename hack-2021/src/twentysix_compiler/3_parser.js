// parser: takes stream of tokens as input and outputs an abstract syntax tree

const defaultParseRules = {
    symbol: (value, attr) => {

    },
    number: (value, attr) => {
        
    },
    string: (value, attr) => {
        
    },
    new_line: (value, attr) => {
        
    }
};

function parser(lexList, parseRules = defaultParseRules) {
    let parseObject = makeParseObject(lexList);

    function buildTree(parseObject) {
        return {
            type: 'TODO',
            value: 0
        };
    }
    
    function makeParseObject(lexList) {
        let index = 0;
        let list = JSON.parse(JSON.stringify(lexList));
        return {
            peekToken: (value = 1) => {
                if (index + value >= list.length) {
                    return null;
                }
                let peekTokens = [];
                for (let i=0; i < value; i++) {
                    peekTokens.push(list[index + 1 + i]);
                }
                return peekTokens.length === 1 ? peekTokens[0] : peekTokens;
            },
            nextToken: () => {
                if (index >= list.length) {
                    return null;
                }
                let token = list[index];
                index += 1;
                return token;
            }
        }
    }

    return {
        type: 'program',
        body: buildTree(parseObject)
    }; 
}

export default parser;