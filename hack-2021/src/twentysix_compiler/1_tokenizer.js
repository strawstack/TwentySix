// tokenizer: breaks a stream of text into tokens, usually by looking for whitespace (tabs, spaces, new lines)

/*
inputStr: program (string)
delimiter: token seperator (string or regex)
replaceOptions: List of objects {from:(regex), to:string} patterns that match 'from' are replaced by 'to' 
*/
function tokenizer(inputStr, delimiter = ' +', newline = "\n", replaceOptions = []) {
    
    // Comvert possible string to regex
    delimiter = new RegExp(delimiter);

    // Replace all given 'from' patterns with 'to'
    let cleanStr = inputStr;
    for (let replaceOpt of replaceOptions) {
        cleanStr = cleanStr.replaceAll(new RegExp(replaceOpt.from, 'g'), replaceOpt.to);
    }

    // Split input on newline
    const lines = cleanStr.split(newline);
    
    // Add back in new line characters
    let linesNL = [];
    for (let line of lines) {
        linesNL.push(line);
        linesNL.push(newline);
    }

    return linesNL
        .map(line => line.split(delimiter))
        .flat();
}

export default tokenizer;