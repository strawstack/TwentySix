import * as React from 'react';
import styles from './Template.module.css';

function Template() {

    const [counter, setCounter] = React.useState(0);

    function handleClick(event) {
        setCounter(counter + 1);
    }

    return (
        <div className={styles.Template}>
            <span>Content {counter}</span>
            <button
                onClick={handleClick}
            >Click</button>
        </div>
    );
}

export default Template;
