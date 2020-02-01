import React from 'react';
import { languages } from './Lang';

function Footer(props) {
    return (
        <div className="container">
            <p className="text-muted">2020 (c) {languages[props.current_lang].copyright}</p>
        </div>
    );
}

export default Footer;
