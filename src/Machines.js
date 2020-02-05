import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { languages, getLangString } from './Lang';
import { getApiLink } from './Api';
import MachineInfo from './MachineInfo';
import MachineAdvancedInfo from './MachineAdvancedInfo';

class Machines extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_lang: this.props.current_lang,
            client_id: this.props.client_id,
            isLoading: true,
            isError: false,
            machine_id: null,
            machine: null,
            machine_realtime: null,
            reconnect_timer: null
        };
        this.socket = null;
        fetch('/'+getApiLink('get_machine'))
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({ machine: responseJson.machine });
          //this.setState({ isLoding: false });
        })
        .catch((error) => {
          //this.setState({current_error: error});
          console.error(error);
        });
    }
    socketConnection(th) {
        th.socket = new WebSocket("ws://" + document.domain + ":9001/?machine_id=" + th.state.machine_id + "&client_id=" + th.state.client_id);
        th.socket.onerror = (error) => {
            th.setState({ isError: true });
            th.socket = null;
            //console.error(error);
            if (th.state.reconnect_timer == null) {
                th.setState({
                    reconnect_timer: setInterval(th.socketConnection, 1000, th)
                });
            }
        }
        th.socket.onopen = () => {
            th.setState({ isError: false });
            th.setState({ isLoading: false });
            clearInterval(th.state.reconnect_timer);
            th.setState({ reconnect_timer: null });
            var jsonString = JSON.stringify({ action: "start", language: th.state.current_lang })
            if (th.socket !== null) {
                if (th.socket.readyState === 1) th.socket.send(jsonString);
            }
        }
        th.socket.onclose = () => {
            th.setState({ isError: true });
            th.setState({ isLoading: true });
            th.setState({ isError: true });
            th.socket = null;
            //console.error(error);
            if (th.state.reconnect_timer == null) {
                th.setState({
                    reconnect_timer: setInterval(th.socketConnection, 1000, th)
                });
            }
        }
        th.socket.onmessage = (messange) => {
            var msg = JSON.parse(messange.data);
            th.setState({ machine_realtime: msg.machine });
        }
    }
    componentDidMount() {
        const machine_id = this.props.match.match.params.MachineId;
        this.setState({ machine_id: machine_id },
            () => this.socketConnection(this));
    }
    render() {
        const header = <h2>{getLangString(languages, this.state.current_lang, "machine")} {this.state.machine_id}</h2>;
        if (this.state.isLoading) {
            return (
                <div className="container">
                    {header}
                    <div>{getLangString(languages, this.state.current_lang, "loading")} ...</div>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    <div>{this.state.isError == true && <Alert variant="danger">{getLangString(languages, this.state.current_lang, "load_error")}</Alert>}</div>
                </div>
            );
        }
        else if (this.state.machine !== null) {
            return (
                <div className="container">
                    {header}
                    <p>{getLangString(languages, this.state.current_lang, "connected")}</p>
                    <MachineInfo current_lang={this.state.current_lang} info={this.state.machine}>
                        <h4>{getLangString(languages, this.state.current_lang, "realtime_information_title")}</h4>
                        <MachineAdvancedInfo current_lang={this.state.current_lang} info={this.state.machine_realtime} />
                    </MachineInfo>
                </div>
            );
        }
        else {
            return (
                <div className="container">
                    {header}
                    <p>{getLangString(languages, this.state.current_lang, "waiting_data")}</p>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    <div>{this.state.isError == true && <Alert variant="danger">{getLangString(languages, this.state.current_lang, "load_error")}</Alert>}</div>
                </div>
            );
        }
    }
}

export default Machines;