import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';

var muldata = require('./sampledata.json');
var sindata = require('./singledata.json');

class App extends Component {
  state = {
    rows: [],
    lmao: "asdkj"
  };
  
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    fetch("http://nichujie.xyz:8080/history")
    .then(response => response.json())
    .then(data => console.log(data));
    console.log("alskdjalsdj");
  }

  handleClick(){
    this.setState({
      rows: sindata
    }, () => {console.log(this.state.rows)});
    
  }
  render() {
    return (
      <div className="App">
        <div className="sides" id='left'>
          <div>
            <p>All builds</p>
          </div>
          <table id="lefttable">
            <thead>
              <tr>
                <th>uid</th>
                <th className="lefthash">commit_hash</th>
                <th>content</th>
                <th>timestamp</th>  
              </tr>
            </thead>
            <tbody>
              {muldata.reverse().map(element =>(
                <tr>
                  <td>{element.uid}</td>
                  <td>{element.commitId}</td>
                  <td>{element.content}</td>
                  <td>{element.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="sides" id="right">
          <div>              
            <button onClick={this.handleClick}>
              Get build
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>uid</th>
                <th>commit_hash</th>
                <th>content</th>
                <th>timestamp</th>  
              </tr>
            </thead>
            <tbody>
              {this.state.rows.map(element =>(
                <tr>
                  <td>{element.uid}</td>
                  <td>{element.commitId}</td>
                  <td>{element.content}</td>
                  <td>{element.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
