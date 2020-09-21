import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import {MessageMap} from './MessageMap';

export const DisplayMessages = ({messagelist, username}) => {

  return(
    <ScrollToBottom>
      {messagelist.map((message, id) => <div key={id}> <MessageMap message={message} username={username} /></div>)}
    </ScrollToBottom>
  )
}
