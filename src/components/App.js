import React, { Component } from "react";
import Input from "./Input";

class App extends Component {
  state = {
    Text: ""
  };
  setText = Text => {
    this.setState({ Text });
  };
  render() {
    return (
      <>
        <h1>CodeForge</h1>
        <Input Text={this.state.Text} setText={this.setText} />
        <br />
        <Input Text={this.state.Text} setText={this.setText} />
        <br />
        <pre>{JSON.stringify({ state: this.state }, null, 2)}</pre>
      </>
    );
  }
}

export default App;
