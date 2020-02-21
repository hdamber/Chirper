import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { header: "Chirper" };
  }
  render() {
    return <h2>{this.state.header}</h2>
  }
}

export default Header;
