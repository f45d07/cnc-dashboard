import React from 'react';
import { useParams } from 'react-router-dom';

function Doc() {
    let { DocId } = useParams();
    return (
        <div>Doc {DocId}</div>
    );
}

export default Doc;