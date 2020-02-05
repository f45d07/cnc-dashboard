import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { languages, getLangString } from './Lang';
import './MachineInfo.scss';
import Plot from './Plot';

class MachineInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="MachineInfo">
                <div className="MachineMainInfo">
                    <h3>{getLangString(languages, this.props.current_lang, 'machine_main_info_title')}</h3>
                    <Container>
                        <Row>
                            <Col sm>
                                {this.props.info.map((option_group) => (
                                    <Container>
                                        <h5>{option_group.title}</h5>
                                        <div className="MachineOptionsGroup">
                                            {
                                                option_group.values.map((param) => (
                                                    <span>
                                                        <span>{Object.keys(param)[0]}</span>:
                                                        <span> {param[Object.keys(param)[0]]}</span>
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    </Container>
                                ))}
                            </Col>
                            <Col sm>
                                <Plot />
                            </Col>
                        </Row>
                    </Container>
                </div>
                {this.props.children}
            </div >
        );
    }
}

export default MachineInfo;