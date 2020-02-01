import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import './Machines.css'
import { languages, getLangString } from './Lang';
import { getMachineType } from './MachinesTypes';
import { getApiLink } from './Api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoding: true, machines: null, current_lang: this.props.current_lang, current_error: null };
  }
  render() {
    if (this.state.isLoding) {
      fetch(getApiLink('get_all_machines'))
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({ machines: responseJson.machines });
          this.setState({ isLoding: false });
        })
        .catch((error) => {
          this.setState({current_error: error});
          console.error(error);
        });
      return (
        <div className="center-of-page">
          <div>
            <p>{getLangString(languages, this.state.current_lang, "loading")} ...</p>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="container">
          <CardDeck>
            {this.state.machines.map(machine => (
              <Card key={machine.id} className="MachineCard">
                <Card.Body>
                  <Card.Title><a href={"/machine/" + machine.id}>{machine.name}</a></Card.Title>
                  <div className="MachineImg">
                    <Card.Img variant="bottom" src={machine.image} onError={e => {
                      e.target.src = 'data:image/png;base64,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AAAAABBIAAAAAAAAgEACAAAAAAAABBIAAAAAAAAgkAAAAAAAAACBBAAAAAAAAAgkAAAAAAAAQCABAAAAAAAAAgkAAAAAAAAQSAAAAAAAAIBAAgAAAAAAAAQSAAAAAAAAIJAAAAAAAAAAgQQAAAAAAAAIJAAAAAAAAEAgAQAAAAAAAAIJAAAAAAAAEEgAAAAAAACAQAIAAAAAAAAEEgAAAAAAACCQAAAAAAAAAIEEAAAAAAAACCQAAAAAAABAIAEAAAAAAAACCQAAAAAAABBIAAAAAAAAgEACAAAAAAAABBIAAAAAAAAgkAAAAAAAAACBBAAAAAAAAAgkAAAAAAAAQCABAAAAAAAAAgkAAAAAAAAQSAAAAAAAAIBAAgAAAAAAAAQSAAAAAAAAINCeJQDYLYuum5aLqZUAAAAAyOYdAAAAAAAAEEgAAAAAAACAQAIAAAAAAAAEEgAAAAAAACCQAAAAAAAAAIEEAAAAAAAACCQAAAAAAABAIAEAAAAAAAACCQAAAAAAABBIAAAAAAAAgEACAAAAAAAABBIAAAAAAAAgkAAAAAAAAACBBAAAAAAAAAgkAAAAAAAAQCABAAAAAAAAAgkAAAAAAAAQSAAAAAAAAIBAAgAAAAAAAAQSAAAAAAAAIJAAAAAAAAAAgQQAAAAAAAAIJAAAAAAAAEAgAQAAAAAAAAIJAAAAAAAAEEgAAAAAAACAQAIAAAAAAAAEEgAAAAAAACCQAAAAAAAAAIEEAAAAAAAACCQAAAAAAABAIAEAAAAAAAACCQAAAAAAABBIAAAAAAAAgEACAAAAAAAABBIAAAAAAAAgkAAAAAAAAACB9iwBwGBuTdr2hWUAAAAAYAy8AwAAAAAAAAIJAAAAAAAAEEgAAAAAAACAQAIAAAAAAAAEEgAAAAAAACCQAAAAAAAAAIEEAAAAAAAACCQAAAAAAABAIAEAAAAAAAACCQAAAAAAABBIAAAAAAAAgEACAAAAAAAABBIAAAAAAAAgkAAAAAAAAACBBAAAAAAAAAgkAAAAAAAAQCABAAAAAAAAAgkAAAAAAAAQSAAAAAAAAIBAAgAAAAAAAAQSAAAAAAAAIJAAAAAAAAAAgQQAAAAAAAAIJAAAAAAAAEAgAQAAAAAAAAIJAAAAAAAAEEgAAAAAAACAQAIAAAAAAAAEEgAAAAAAACCQAAAAAAAAAIEEAAAAAAAACCQAAAAAAABAIAEAAAAAAAACCQAAAAAAABBIAAAAAAAAgEACAAAAAAAABBIAAAAAAAAgkAAAAAAAAACBBAAAAAAAAAgkAAAAAAAAQCABAAAAAAAAAgkAAAAAAAAQSAAAAAAAAIBAAgAAAAAAAAQSAAAAAAAAIJAAAAAAAAAAgQQAAAAAAAAIJAAAAAAAAEAgAQAAAAAAAAIJAAAAAAAAEEgAAAAAAACAQAIAAAAAAAAEEgAAAAAAACCQAAAAAAAAAIEEAAAAAAAACCQAAAAAAABAIAEAAAAAAAACCQAAAAAAABBIAAAAAAAAgEACAAAAAAAABBIAAAAAAAAgkAAAAAAAAACBBAAAAAAAAAgkAAAAAAAAQCABAAAAAAAAAgkAAAAAAAAQSAAAAAAAAIBAAgAAAAAAAAQSAAAAAAAAIJAAAAAAAAAAgQQAAAAAAAAIJAAAAAAAAEAgAQAAAAAAAAIJAAAAAAAAEEgAAAAAAACAQHuWAFjB3BIAAADAqJ1bAuCDFy9eWAUAAAAAAAgjAAAAAAAAQCABAAAAAAAAAgkAAAAAAAAQSAAAAAAAAIBAAgAAAAAAAAQSAAAAAAAAIJAAAAAAAAAAgQQAAAAAAAAIJAAAAAAAAEAgAQAAAAAAAAIJAAAAAAAAEEgAAAAAAACAQAIAAAAAAAAEEgAAAAAAACCQAAAAAAAAAIEEAAAAAAAACCQAAAAAAABAIAEAAAAAAAACCQAAAAAAABBIAAAAAAAAgEACAAAAAAAABBIAAAAAAAAgkAAAAAAAAACBBAAAAAAAAAgkAAAAAAAAQCABAAAAAAAAAgkAAAAAAAAQSAAAAAAAAIBAAgAAAAAAAAQSAAAAAAAAIJAAAAAAAAAAgQQAAAAAAAAIJAAAAAAAAEAgAQAAAAAAAAIJAAAAAAAAEEgAAAAAAACAQAIAAAAAAAAEEgAAAAAAACCQAAAAAAAAAIEEAAAAAAAACCQAAAAAAABAIAEAAAAAAAACCQAAAAAAABBIAAAAAAAAgEACAAAAAAAABBIAAAAAAAAgkAAAAAAAAACBBAAAAAAAAAgkAAAAAAAAQCABAAAAAAAAAgkAAAAAAAAQSAAAAAAAAIBAAgAAAAAAAAQSAAAAAAAAIJAAAAAAAAAAgQQAAAAAAAAIJAAAAAAAAEAgAQAAAAAAAAIJAAAAAAAAEEgAAAAAAACAQAIAAAAAAAAEEgAAAAAAACCQAAAAAAAAAIEEAAAAAAAACCQAAAAAAABAIAEAAACA/2PPDmQAAAAABvlb3+MrjQAAGBIAAAAAAAAwJAAAAAAAAGBIAAAAAAAAwJAAAAAAAACAIQEAAAAAAABDAgAAAAAAAIYEAAAAAAAADAkAAAAAAAAYEgAAAAAAADAkAAAAAAAAYEgAAAAAAADAkAAAAAAAAIAhAQAAAAAAAEMCAAAAAAAAhgQAAAAAAAAMCQAAAAAAABgSAAAAAAAAMCQAAAAAAABgSAAAAAAAAMCQAAAAAAAAgCEBAAAAAAAAQwIAAAAAAACGBAAAAAAAAAwJAAAAAAAAGBIAAAAAAAAwJAAAAAAAAGBIAAAAAAAAwJAAAAAAAACAIQEAAAAAAABDAgAAAAAAAIYEAAAAAAAADAkAAAAAAAAYEgAAAAAAADAkAAAAAAAAYEgAAAAAAADAkAAAAAAAAIAhAQAAAAAAAEMCAAAAAAAAhgQAAAAAAAAMCQAAAAAAABgSAAAAAAAAMCQAAAAAAABgSAAAAAAAAMCQAAAAAAAAgCEBAAAAAAAAQwIAAAAAAACGBAAAAAAAAAwJAAAAAAAAGBIAAAAAAAAwJAAAAAAAAGBIAAAAAAAAwJAAAAAAAACAIQEAAAAAAABDAgAAAAAAAIYEAAAAAAAADAkAAAAAAAAYEgAAAAAAADAkAAAAAAAAYEgAAAAAAADAkAAAAAAAAIAhAQAAAAAAAEMCAAAAAAAAhgQAAAAAAAAMCQAAAAAAABgSAAAAAAAAMCQAAAAAAABgSAAAAAAAAMCQAAAAAAAAgCEBAAAAAAAAQwIAAAAAAACGBAAAAAAAAAwJAAAAAAAAGBIAAAAAAAAwJAAAAAAAAGBIAAAAAAAAwJAAAAAAAACAIQEAAAAAAABDAgAAAAAAAIYEAAAAAAAADAkAAAAAAAAYEgAAAAAAADAkAAAAAAAAYEgAAAAAAADAkAAAAAAAAIAhAQAAAAAAAEMCAAAAAAAAhgQAAAAAAAAMCQAAAAAAABgSAAAAAAAAMCQAAAAAAABgSAAAAAAAAMCQAAAAAAAAgCEBAAAAAAAAQwIAAAAAAACGBAAAAAAAAAwJAAAAAAAAGBIAAAAAAAAwJAAAAAAAAGBIAAAAAAAAwJAAAAAAAACAIQEAAAAAAABDAgAAAAAAAIYEAAAAAAAADAkAAAAAAAAYEgAAAAAAADAkAAAAAAAAYEgAAAAAAADAkAAAAAAAAIAhAQAAAAAAAEMCAAAAAAAAhgQAAAAAAAAMCQAAAAAAABgSAAAAAAAAMCQAAAAAAABgSAAAAAAAAMCQAAAAAAAAgCEBAAAAAAAAQwIAAAAAAACGBAAAAAAAAAwJAAAAAAAAGBIAAAAAAAAwJAAAAAAAAGBIAAAAAAAAwJAAAAAAAACAIQEAAAAAAABDAgAAAAAAAIYEAAAAAAAADAkAAAAAAAAYEgAAAAAAADAkAAAAAAAAYEgAAAAAAADAkAAAAAAAAIAhAQAAAAAAAEMCAAAAAAAAhgQAAAAAAAAMCQAAAAAAABhKAAEGANOHjllDrubxAAAAAElFTkSuQmCC';
                    }} />
                  </div>
                  <Card.Text>
                    <div className="MachineType">
                      <b>{getLangString(languages, this.state.current_lang, getMachineType(machine.type))}</b>
                    </div>
                    {machine.options !== undefined &&
                      <div className="parameters">
                        {machine.options.map((option) => (
                          <div key={Object.keys(option)[0]} className="parameter">{Object.keys(option)[0]}: {option[Object.keys(option)[0]]}</div>
                        ))}
                      </div>
                    }
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <div><small className="text-muted"><span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span> {machine.place}</small></div>
                  <div><small className="text-muted">{getLangString(languages, this.state.current_lang, "last_update")} {new Date(machine.last_seen * 1000).toLocaleDateString("ru-RU")}</small></div>
                </Card.Footer>
              </Card>
            ))}
          </CardDeck>
        </div>
      );
    }
  }
}

export default Home;