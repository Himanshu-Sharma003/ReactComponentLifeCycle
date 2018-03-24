import React, { Component } from "react";

class SampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: undefined
    };
    console.log("Constructor");
  }
  // Intantiation of Compoonent
  componentWillMount(props) {
    console.log("Component Will mount :", props);
  }

  // Intantiation of Compoonent
  componentDidMount() {
    console.log("Component Did Mount");
    this.setState({
      date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
    });
  }

  //Update of component
  componentWillReceiveProps(props) {
    console.log("Component will Recieve props");
  }

  shouldComponentUpdate() {
    console.log("Should Component update");
    return false;
  }

  componentWillUpdate() {
    console.log("Component will Update");
  }

  render() {
    return (
      <div>
        Hello World from Sample Component Date {this.state.date}
        {/* first time render with undefined */}
        {console.log("Render", this.state.date)}
      </div>
    );
  }
}

export default SampleComponent;
