import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chirpName: "",
      chirpMessage: "",
      chirps: [
        {
          name: "Rachel",
          message: "Is this thing working?"
        },
        {
          name: "Hallie",
          message: "I don't know what I'm doing"
        },
        {
          name: "TJ",
          message: "going to watch Parasite"
        }
      ]
    };
  }



  handleChirpName(e) {
    this.setState({ chirpName: e.target.value });
  }

  handleChirpMessage(e) {
    this.setState({ chirpMessage: e.target.value });
  }

  submitChirp(e) {
    this.setState({});
}


  render() {
    return (
      <div>
        <div>
            <input type="text" onChange={(e) => this.handleChirpName(e)}/>
            <input type="text" onChange={(e) => this.handleChirpMessage(e)}/>
            <button onClick={this.handleClick}>Submit</button>
        </div>
        {this.state.chirps.map((chirp, id) => {
          return (
            <div key={id}>
              <div>{chirp.message}</div>
              <h4>{chirp.name}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;