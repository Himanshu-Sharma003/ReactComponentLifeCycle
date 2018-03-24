import React, { Component } from "react"
import ReactDOM from "react-dom"
import SampleComponent from  "./components/SampleComponent"


class App extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor')
  }

  render() {
    return (
        <SampleComponent  name='himanshu' message='welcome'/>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
