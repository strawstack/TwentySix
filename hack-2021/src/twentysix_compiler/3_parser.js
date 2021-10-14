// parser: takes stream of tokens as input and outputs an abstract syntax tree

const defaultSymbolInfo = {
    symbol: null,
    number: null,
    string: null,
    new_line: null
};

function parser(lexList, symbolInfo = defaultSymbolInfo) {
    let parseObject = makeParseObject(lexList);

    function buildTree(parseObject) {
        let root = {
            type: "multiline",
            left: null,
            right: null
        };
    
        root.left = buildBranch(parseObject);
        if (parseObject.peekToken(2)) {
            parseObject.nextToken(); // Skip over new_line
            root.right = buildTree(parseObject);
        }
        return root;
    }
    
    function buildBranch(parseObject) {
        let token = parseObject.nextToken();
        
        
        return "bagel";
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

    return buildTree(parseObject); 
}

export default parser;