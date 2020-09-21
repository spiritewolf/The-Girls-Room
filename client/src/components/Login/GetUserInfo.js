import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';

import {GlobalContext} from '../GlobalState';

export const GetUserInfo = () => {
  const {updateUsername, updateRoom} = useContext(GlobalContext);
  const [room, setRoom] = useState('');
  const [name, setName] = useState('');

  const sendError = (e) => {
    e.preventDefault();
    alert('Please be sure to fill out the required forms')
  }

  return(
      <form>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="Enter username..."
            onChange={(e) => {
              updateUsername(e.target.value)
              setName(e.target.value)
            }}/>
          <label htmlFor="room">Room</label>
        <div className="selector">
          <select onChange={(e) => {
            updateRoom(e.target.value)
            setRoom(e.target.value)
          }}>
              <option value="Selected">Please Choose a Room</option>
              <option value="The Girls Room">The Girls Room</option>
              <option value="Club Penguin Sucks">Club Penguin Sucks</option>
              <option value="Simps Only">Simps Only</option>
              <option value="Steve Buscemi Fan Club">Steve Buscemi Fan Club</option>
          </select>
            <div className="select-icon">
              <svg focusable="false" viewBox="0 0 104 128" width="25" height="35" className="icon">
                <path d="m2e1 95a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm14 55h68v1e1h-68zm0-3e1h68v1e1h-68zm0-3e1h68v1e1h-68z"></path>
              </svg>
            </div>
          </div>
        </div>
        <Link onClick={(e) => (!room || !name) ? sendError(e) : null} to='/chat'>
          <button type="submit" className="btn">Join Chat</button>
        </Link>
      </form>
  )
}
