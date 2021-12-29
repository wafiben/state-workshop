import React, { Component } from "react";
class App extends Component {
  state = { count: 1, show: false };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  showContent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };

  render() {
    return (
      <div>
        <h1>hello</h1>
        <button onClick={this.increment}>+</button>
        <h2>{this.state.count} </h2>
        <button onClick={this.decrement}>-</button>

        <button onClick={this.showContent}>show</button>
        {this.state.show ? (
          <div>
            <p> hello</p>
            <h1>hello everyone</h1>
            <form>
              <label>email</label>
              <input/>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
