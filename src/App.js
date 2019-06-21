import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      character: {},
      loading: false
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch('https://swapi.co/api/people/1')
      .then(response => response.json())
      .then(data => {
        this.setState((prevState) => {
          return {
            character: data,
            loading: false
          }
        })
      })
  }

  render() {
    const loadingState = this.state.loading ? 'Loading...' : this.state.character.name


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {loadingState}
        </p>
      </div>
    );
  }
}

export default App;
