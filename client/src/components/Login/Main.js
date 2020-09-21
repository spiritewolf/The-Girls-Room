import React from 'react';
import {GetUserInfo} from './GetUserInfo';
//import {GetRoom} from './components/GetRoom';

export const Main = () => {

  return(
    <div className="body">
      <header className="welcome">Hey girlies! Lets chat...</header>
      <div className="welcome-box">
        <header className="welcome-words">
          <h1>The Girls Room</h1>
        </header>
        <main className="welcome-main">
            <GetUserInfo />
        </main>
      </div>
  </div>

  );
}
