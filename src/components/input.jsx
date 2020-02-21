import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = { placeholder: "" };
  }
  render() {
    return (
      <React.Fragment>
        <input
          value={this.state.text}
          onChange={event => {
            this.setState({ placeholder: event.target.value });
          }}
        />
      </React.Fragment>
    );
  }
}

export default Input;
