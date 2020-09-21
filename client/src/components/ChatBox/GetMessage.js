import React from 'react';

export const GetMessage = ({messages, setMessages, emitMessage}) => {

  return(
    <div className="chat-form-box">
      <form>
        <input
          value={messages}
          type="text"
          placeholder="Enter Message"
          onChange={(e) => {setMessages(e.target.value)}}
          onKeyDown={(e) => {
            if(e.key === "Enter"){
              e.preventDefault();
              e.stopPropagation();
              emitMessage(messages);
            }
          }}
        />
        <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          emitMessage(messages);
        }}
        className="btn">Send</button>
      </form>
    </div>
  )
}
