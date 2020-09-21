import React from 'react';

export const MessageMap = ({message: {text, user}, username}) => {
  let currentUser = false;
  if(username === user){
    currentUser = true;
  }
  return(
    <div>
      {currentUser ? <div className="user-message"> {username}: {text} </div> : (user === 'bot') ? <div className="bot-msg"> {user}: {text} </div> : <div className="notuser-message"> {user}: {text} </div>}
    </div>
  )
}
