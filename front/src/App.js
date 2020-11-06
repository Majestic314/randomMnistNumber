import React from 'react';
import './App.css';
import Field from './Field';
import axios from 'axios';

export default class App extends React.PureComponent {

  constructor(context, props) {
    super(context, props);
    this.state = {
      isLoading: false,
      fieldData: null//[[100, 200, 39], [145, 255, 30], [59, 82, 203]]
    };
    this.getNumber = this.getNumber.bind(this);
    this.mapField = this.mapField.bind(this);
  }

  render () {
    const { fieldData, isLoading } = this.state;
    return (
      <div className="app">
        <div className="header">
          <h1 className="title">
            {"MNIST Random Number"}
          </h1>
        </div>
        <div className="body">
          <Field
            field={fieldData}
          />
          <button
            className="get-number-button"
            onClick={this.getNumber}
            disabled={isLoading}
          >
            { isLoading ? "Loading..." : "Get me a number!" }
          </button>
        </div>
      </div>
    );
  }

  getNumber() {
    this.setState( {isLoading: true} );
    axios.get("getNumber").then( response => {
      console.log(response);
      this.setState({
        fieldData: this.mapField(response.data)
      });
    }).catch( error => {
      console.log(error);
    }).finally( () => {
      this.setState( {isLoading: false} );
    });
  }

  mapField(rawField) {
    let resultField = [];
    while (rawField.length > 0) {
      resultField.push(rawField.splice(0, 28));
    }
    return resultField;
  }
}
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
