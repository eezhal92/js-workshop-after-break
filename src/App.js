import React, { Component } from 'react';
import logo from './logo.svg';
import moment from 'moment';
import Navbar from './components/Navbar';
import ChatWindow from './components/ChatWindow';
import './App.css';

const messages = [
  {
    author: 'Bot',
    text: 'Hello, ask me a question',
    createdAt: moment().format(),
  },
  {
    author: 'Me',
    text: 'Find me a book',
    createdAt: moment().format(),
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: messages,
    }
  }

  render() {
    const messages = this.state.messages;
    // const { messages } = this.state;

    return (
      <div className="App">
        <Navbar name="Ijal" />
        <div className="page page--gray">
          <div className="container">
            <ChatWindow messages={messages} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
