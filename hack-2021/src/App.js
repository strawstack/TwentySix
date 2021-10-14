import React from 'react';
import styles from './App.module.css';

import TitleArea from './TitleArea.js';
import StepArea from './StepArea.js';
import AceArea from './AceArea.js';

function App() {

    const [step, setStep] = React.useState(1);
    const [tokenizerInput, setTokenizerInput] = React.useState("");
    const [tokenizerRules, setTokenizerRules] = React.useState("");
    const [tokenizerOutput, setTokenizerOutput] = React.useState("");

    const [lexerInput, setLexerInput] = React.useState("");
    const [lexerRules, setLexerRules] = React.useState("");
    const [lexerOutput, setLexerOutput] = React.useState("");

    const [parserInput, setParserInput] = React.useState("");
    const [parserRules, setParserRules] = React.useState("");
    const [parserOutput, setParserOutput] = React.useState("");

    const [generatorInput, setGeneratorInput] = React.useState("");
    const [generatorRules, setGeneratorRules] = React.useState("");
    const [generatorOutput, setGeneratorOutput] = React.useState("");

    if (step === 1) {
        const aceAreaLabels = ["Program Input", "Tokenizer Rules", "Tokenizer Output"];
        return (
            <div className={styles.App}>
                <TitleArea />
                <StepArea step={step} setStep={setStep} />
                <h2>{aceAreaLabels[0]}</h2>
                <h2>{aceAreaLabels[1]}</h2>
                <h2>{aceAreaLabels[2]}</h2>
                <AceArea value={tokenizerInput} setValue={setTokenizerInput} uid={`AceID-${0}`} />
                <AceArea value={tokenizerRules} setValue={setTokenizerRules} uid={`AceID-${1}`} />
                <AceArea value={tokenizerOutput} setValue={setTokenizerOutput} uid={`AceID-${2}`} readOnly={true} />
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
                <AceArea value={generatorOutput} setValue={setGeneratorOutput} uid={`AceID-${11}`} readOnly={true} />
                <div className={styles.ResetBtn}>Reset</div>
            </div>
        );
    }
}

export default App;
