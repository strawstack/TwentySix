import * as React from 'react';
import styles from './StepArea.module.css';

function StepArea({step, setStep}) {
    const stepSize = React.useRef();
    const height = 70;
    const width = 120;
    
    const [position, setPosition] = React.useState({
        top: 0,
        left: 0
    });

    React.useEffect(() => {
        const stepHeight = stepSize.current.offsetHeight;
        const stepWidth = stepSize.current.offsetWidth;
        const top = stepHeight/2 - height/2;
        const left = stepWidth/2 + (step - 1) * stepWidth - width/2;
        setPosition({
            top: top,
            left: left
        });
    }, [step]);

    return (
        <div className={styles.StepArea}>
            <div className={styles.Marker} 
                style={{top: `${position.top}px`, left: `${position.left}px`, height: `${height}px`, width: `${width}px`}}
            ></div>
            <div className={styles.Step} ref={stepSize} onClick={() => setStep(1)}>
                <div className={styles.Number}>1</div>
                <div className={styles.Name}>Tokenizer</div>
            </div>
            <div className={styles.Step} onClick={() => setStep(2)}>
                <div className={styles.Number}>2</div>
                <div className={styles.Name}>Lexer</div>
            </div>
            <div className={styles.Step} onClick={() => setStep(3)}>
                <div className={styles.Number}>3</div>
                <div className={styles.Name}>Parser</div>
            </div>
            <div className={styles.Step} onClick={() => setStep(4)}>
                <div className={styles.Number}>4</div>
                <div className={styles.Name}>Generator</div>
            </div>
        </div>
    );
}

export default StepArea;
