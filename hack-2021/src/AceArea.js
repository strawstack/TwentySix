import * as React from 'react';
import styles from './AceArea.module.css';

import "ace-builds";
import AceEditor from "react-ace";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

function AceArea({value, setValue, uid, readOnly = false}) {

    function onChange(newValue) {
        //console.log("change", newValue);
        setValue(newValue);
    }

    return (
        <div className={styles.AceArea}>
            <AceEditor
                mode="javascript"
                theme="github"
                value={value}
                onChange={onChange}
                name={uid}
                style={{width: 'auto', height: '100%'}}
                editorProps={{ $blockScrolling: false }}
                readOnly={readOnly}
            />
        </div>
    );
}

export default AceArea;
