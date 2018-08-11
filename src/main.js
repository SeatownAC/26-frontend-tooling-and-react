import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import { say }from 'cowsay';

import './style/app.scss';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'I am smart talking cow',
      
    };
    this.handleClick = this.handleClick.bind(this);
    
  }
  
  handleClick() {
    this.setState({
      content: faker.hacker.phrase(),
    });
  }

  
  render() {
    return (
      <React.Fragment>
        <h1>Talking Cow</h1>
        <button onClick={this.handleClick}>click me</button>
       
        
        <pre>{say({ text: this.state.content})}</pre>
      </React.Fragment>
    );
  }
}


ReactDom.render(<App/>, document.getElementById('root'));
