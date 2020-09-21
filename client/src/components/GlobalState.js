import React, {Component, createContext} from 'react';

export const GlobalContext = createContext({
  username: '',
  updateUsername: () => {},
  room: [],
  updateRoom: () => {},
});

export class GlobalProvider extends Component {


  updateUsername = newUsername => {
    this.setState({ username: newUsername });
  };
  updateRoom = newRoom => {
    this.setState({ room: newRoom });
  };


  state = {
    username: '',
    updateUsername: this.updateUsername,
    room: [],
    updateRoom: this.updateRoom,
  };

  render() {
    return (
      <GlobalContext.Provider value={this.state}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export const GlobalConsumer = GlobalContext.Consumer;
