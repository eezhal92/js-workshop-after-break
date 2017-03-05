import React from 'react';
import MessageList from './MessageList';

const ChatWindow = (props) => (
  <div className="chat-window"> 
    <div className="row">
      <div className="col-xs-12 col-sm-8 col-sm-offset-2">
        <div className="panel panel-default">
          <div className="panel-body">
            <MessageList pesans={props.messages} />
          </div> 
        </div>
      </div> 
    </div> 
  </div> 
);

export default ChatWindow;