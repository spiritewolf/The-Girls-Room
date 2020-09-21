import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import io from "socket.io-client";
import {GlobalContext} from './GlobalState';

import {UserList} from './ChatBox/UserList';
import {CurrentRoom} from './ChatBox/CurrentRoom';
import {GetMessage} from './ChatBox/GetMessage';
import {DisplayMessages} from './ChatBox/DisplayMessages';

let socket;

export const Chat = () => {
  const {username, room} = useContext(GlobalContext);
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState('');
  const [messagelist, setMessagelist] = useState([]);
  const ENDPOINT = 'localhost:5000';
  //const ENDPOINT = 'https://the-girls-room.herokuapp.com/';

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit('joinroom', {username, room}, (error) => {
      if(error) {
        alert(error);
      }});
    socket.emit('disconnect', {username});
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on('getRoom', ({users}) =>{
      setUsers(users);
    });
    socket.on('message', messages => {
      setMessagelist(messagelist => [...messagelist, messages])
    });
  }, []);

  const emitMessage = () => {
    socket.emit('sendMessage', messages, () => setMessages(''));
  }

  const handleClick = () => {
    console.log('handled click' + username);
    socket.emit('leave', {username, room});
  }


  return(
    <div className="body">
      <div className="chat-box">
        <header className="chat-header">
          <h1>The Girls Room</h1>
          <Link onClick={handleClick} to="/">
            <li className="btn">Leave Room</li>
          </Link>
        </header>
        <main className="chat-main">
          <div className="chat-sidebar">
            <h3> Room Name: </h3>
              <CurrentRoom room={room}/>
            <h3> Users: </h3>
              <UserList users={users}/>
            </div>
          <div className="chat-messages">
            <DisplayMessages messagelist={messagelist} username={username}/>
          </div>
        </main>
        <GetMessage messages={messages} setMessages={setMessages} emitMessage={emitMessage}/>
      </div>
    </div>
  );
}
