import React from 'react';
import './Docs.css';
import { getDocs } from './AllDocs.js';
import { languages, getLangString } from './Lang';

function Docs(props) {
    return (
        <div className="container docs">
            <h1>{getLangString(languages, props.current_lang, "documents_dashboard_title")}</h1>
            {getDocs(props.current_lang, "main").map((doc) => (
                <div>
                    <p>
                        <span>{doc.id} </span>
                        <span><a href={"/doc/"+doc.id}>{doc.name} </a></span>
                        <span><i>v. {doc.version}</i></span>
                    </p>
                </div>
            ))
            }
            <h1>{getLangString(languages, props.current_lang, "documents_cnc_title")}</h1>
            {getDocs(props.current_lang, "for_machines").map((doc) => (
                <div>
                    <p>
                        <span>{doc.id} </span>
                        <span><a href={"/doc/"+doc.id}>{doc.name} </a></span>
                        <span><i>v. {doc.version}</i></span>
                    </p>
                </div>
            ))
            }
        </div >
    );
}

export default Docs;