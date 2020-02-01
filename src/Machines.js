import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'
import { languages, getLangString } from './Lang';

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
            reconnect_timer: null
        };
        this.socket = null;
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
            if(th.socket.readyState === 1) th.socket.send(jsonString);
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
            th.setState({ machine: msg.machine });
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
                    <div>{this.state.isError == true && <Alert variant="danger">{getLangString(languages, this.state.current_lang, "load_error")}</Alert>}</div>
                </div>
            );
        }
        else if (this.state.machine !== null) {
            return (
                <div className="container">
                    {header}
                    <p>{getLangString(languages, this.state.current_lang, "connected")}</p>
                    <ul>
                        <li>{this.state.machine.one}</li>
                        <li>{this.state.machine.two}</li>
                        <li>{this.state.machine.three}</li>
                    </ul>
                </div>
            );
        }
        else {
            return (
                <div className="container">
                    {header}
                    <p>{getLangString(languages, this.state.current_lang, "waiting_data")}</p>
                    <div>{this.state.isError == true && <Alert variant="danger">{getLangString(languages, this.state.current_lang, "load_error")}</Alert>}</div>
                </div>
            );
        }
    }
}

export default Machines;