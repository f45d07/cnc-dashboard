import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import { languages, getLangString } from './Lang';
import './MachineAdvancedInfo.scss';

class MachineAdvancedInfo extends Component {
    constructor(props) {
        super(props);
    }
    open(e) {
        e.preventDefault(e);
        if (e.target.parentElement.getElementsByClassName('card-context')[0].classList.contains('hidden')) {
            e.target.parentElement.getElementsByClassName('card-context')[0].classList.remove('hidden');
            e.target.parentElement.getElementsByClassName('header')[0].classList.add('to-close');
        }
        else {
            e.target.parentElement.getElementsByClassName('card-context')[0].classList.add('hidden');
            e.target.parentElement.getElementsByClassName('header')[0].classList.remove('to-close');
        }
    }
    render() {
        if (this.props.info === null) return (<span>No data!</span>);
        return (
            <div className="MachineAnvancedInfo">
                { /* <h3>{getLangString(languages, this.props.current_lang, 'machine_advanced_info_title')}</h3> */}
                {this.props.info.map((option) => (
                    <div className="card" key={1}>
                        <div className="header" onClick={(e) => this.open(e)}>{option.title}</div>
                        <div className="card-context hidden">
                            <Table responsive size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>{getLangString(languages, this.props.current_lang, 'machine_advanced_param_title')}</th>
                                        <th>{getLangString(languages, this.props.current_lang, 'machine_advanced_value_title')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {option.params.map((param, index) => (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{Object.keys(param)[0]}</td>
                                            <td>{param[Object.keys(param)[0]]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default MachineAdvancedInfo;