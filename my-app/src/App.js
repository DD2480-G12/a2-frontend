import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    rows: [],
    searchedId: [],
    searchVal: ''
  };
  
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    fetch("/history")
    .then(response => response.json())
    .then(data => this.setState({
      rows:data 
    }));
    
  }

  handleChange(event) {
    this.setState({searchVal: event.target.value});  
  }
  
  handleClick(){
    fetch("/history/"+this.state.searchVal)
    .then(response => response.json())
    .then(data => this.setState({
      searchedId:[data]
    }));
    
  }
  render() {
    return (
      <div className="App">
        <div className="sides" id="left">
        <div>
            <p>All builds</p>
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
        <div className="sides" id='right'>
          <div>              
            <button onClick={this.handleClick}>
              Get build
            </button>
            <input value={this.state.searchVal} onChange={this.handleChange} type="text"/>
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
              {this.state.searchedId.map(element =>(
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
