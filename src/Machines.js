import React from 'react';
import {
    useParams
  } from 'react-router-dom';

function Machines() {
    let { MachineId } = useParams();
    return (
        <div>Machine {MachineId}</div>
    );
}

export default Machines;