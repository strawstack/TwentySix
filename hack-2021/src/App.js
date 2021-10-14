import React from 'react';
import styles from './App.module.css';

import TitleArea from './TitleArea.js';
import StepArea from './StepArea.js';
import AceArea from './AceArea.js';

import tokenizer from './twentysix_compiler/1_tokenizer.js';
import lexer from './twentysix_compiler/2_lexer.js';

function App() {

    const defaultTokenizerRules = JSON.stringify({
        replace: [
            {from: " A 2 3[ ]?", to: " 5 "}
        ],
        delimiter: " +",
        newline: "\n"
    }, null, 4);

    const defaultTokenizerInput = "L a A 4 6\nL b T 3 S 3 1\nP A a b";

    const defaultLexerRules = JSON.stringify({
        symbol: '^([a-z]{1,3}|[A-Z])$',
        number: '^[0-9]+(\.[0-9]+)?$', 
        string: '^"[^"]+"$',
        newline: '\n'
    }, null, 4);

    const [step, setStep] = React.useState(1);
    const [tokenizerInput, setTokenizerInput] = React.useState(defaultTokenizerInput);
    const [tokenizerRules, setTokenizerRules] = React.useState(defaultTokenizerRules);
    const [tokenizerOutput, setTokenizerOutput] = React.useState("");

    const [lexerInput, setLexerInput] = React.useState("");
    const [lexerRules, setLexerRules] = React.useState(defaultLexerRules);
    const [lexerOutput, setLexerOutput] = React.useState("");

    const [parserInput, setParserInput] = React.useState("");
    const [parserRules, setParserRules] = React.useState("");
    const [parserOutput, setParserOutput] = React.useState("");

    const [generatorInput, setGeneratorInput] = React.useState("");
    const [generatorRules, setGeneratorRules] = React.useState("");
    const [generatorOutput, setGeneratorOutput] = React.useState("");

    const [errorTokenizer, setErrorTokenizer] = React.useState(null);
    const [errorLexer, setErrorLexer] = React.useState(null);

    React.useEffect(() => {
        setErrorTokenizer(null);
        let tokenizerRulesObject;
        try {
            tokenizerRulesObject = JSON.parse(tokenizerRules);
        } catch(e) {
            setErrorTokenizer(e.message);
            return;
        }
        if (tokenizerRulesObject) {
            setTokenizerOutput(
                JSON.stringify(
                    tokenizer(tokenizerInput, tokenizerRulesObject.delimiter, tokenizerRulesObject.newline, tokenizerRulesObject.replace),
                    null, 4
                )
            );
        }
    }, [tokenizerInput, tokenizerRules]);

    React.useEffect(() => {
        setLexerInput(tokenizerOutput);
    }, [tokenizerOutput]);

    React.useEffect(() => {
        setErrorLexer(null);
        let lexerInputObject;
        let lexerRulesObject;
        try {
            lexerInputObject = JSON.parse(lexerInput);
            lexerRulesObject = JSON.parse(lexerRules);
        } catch(e) {
            setErrorLexer(e.message);
            return;
        }
        if (lexerInputObject && lexerRulesObject) {
            setLexerOutput(
                JSON.stringify(
                    lexer(lexerInputObject, lexerRulesObject),
                    null, 4
                )
            );
        }
    }, [lexerInput, lexerRules]);

    if (step === 1) {
        const aceAreaLabels = ["Program Input", "Tokenizer Rules", "Tokenizer Output"];
        return (
            <div className={styles.App}>
                <TitleArea />
                <StepArea step={step} setStep={setStep} />
                <h2>{aceAreaLabels[0]}</h2>
                <h2>{aceAreaLabels[1]}</h2>
                <h2>{aceAreaLabels[2]}</h2>
                <AceArea value={tokenizerInput} setValue={setTokenizerInput} uid={`AceID-${0}`} plainText={true} />
                <AceArea value={tokenizerRules} setValue={setTokenizerRules} uid={`AceID-${1}`} />
                <AceArea value={tokenizerOutput} setValue={setTokenizerOutput} uid={`AceID-${2}`} readOnly={true} />
                <div className={styles.ErrorMessage}>{errorTokenizer ? `Error: ${errorTokenizer}`: ""}</div>
                <div className={styles.ResetBtn}>Reset</div>
            </div>
        );

    } else if (step === 2) {
        const aceAreaLabels = ["Lexer Input", "Lexer Rules", "Lexer Output"];
        return (
            <div className={styles.App}>
                <TitleArea />
                <StepArea step={step} setStep={setStep} />
                <h2>{aceAreaLabels[0]}</h2>
                <h2>{aceAreaLabels[1]}</h2>
                <h2>{aceAreaLabels[2]}</h2>
                <AceArea value={lexerInput} setValue={setLexerInput} uid={`AceID-${3}`} />
                <AceArea value={lexerRules} setValue={setLexerRules} uid={`AceID-${4}`} />
                <AceArea value={lexerOutput} setValue={setLexerOutput} uid={`AceID-${5}`} readOnly={true} />
                <div className={styles.ErrorMessage}>{errorLexer ? `Error: ${errorLexer}`: ""}</div>
                <div className={styles.ResetBtn}>Reset</div>
            </div>
        );

    } else if (step === 3) {
        const aceAreaLabels = ["Parser Input", "Parser Rules", "Parser Output"];
        return (
            <div className={styles.App}>
                <TitleArea />
                <StepArea step={step} setStep={setStep} />
                <h2>{aceAreaLabels[0]}</h2>
                <h2>{aceAreaLabels[1]}</h2>
                <h2>{aceAreaLabels[2]}</h2>
                <AceArea value={parserInput} setValue={setParserInput} uid={`AceID-${6}`} />
                <AceArea value={parserRules} setValue={setParserRules} uid={`AceID-${7}`} />
                <AceArea value={parserOutput} setValue={setParserOutput} uid={`AceID-${8}`} readOnly={true} />
                <div className={styles.ResetBtn}>Reset</div>
            </div>
        );

    } else if (step === 4) {
        const aceAreaLabels = ["Generator Input", "Generator Rules", "Program Output"];
        return (
            <div className={styles.App}>
                <TitleArea />
                <StepArea step={step} setStep={setStep} />
                <h2>{aceAreaLabels[0]}</h2>
                <h2>{aceAreaLabels[1]}</h2>
                <h2>{aceAreaLabels[2]}</h2>
                <AceArea value={generatorInput} setValue={setGeneratorInput} uid={`AceID-${9}`} />
                <AceArea value={generatorRules} setValue={setGeneratorRules} uid={`AceID-${10}`} />
                <AceArea value={generatorOutput} setValue={setGeneratorOutput} uid={`AceID-${11}`} readOnly={true} plainText={true} />
                <div className={styles.ResetBtn}>Reset</div>
            </div>
        );
    }
}

export default App;
