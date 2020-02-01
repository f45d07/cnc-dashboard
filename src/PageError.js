import React from 'react';
import { languages } from './Lang';

function PageError(props) {
    return (
        <div class="center-of-page">
            <div>
                {languages[props.current_lang].not_found}
            </div>
        </div>
    );
}

export default PageError;