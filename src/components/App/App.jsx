import React from 'react';
import '../../assets/styles.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // set default state
    this.state = {
      title: 'React Node Three app'
    };
  }

  render() {
    // wrap tags in brackets to avoid blank return statement if you want to format nicely across multiple lines
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <canvas id="gfx-canvas"/>

      </div>
    );
  }
}
