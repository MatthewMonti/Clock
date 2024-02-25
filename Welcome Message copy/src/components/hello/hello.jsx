import React from "react";

const beep = new Audio(
  "https://cdn.freesound.org/previews/560/560188_6086693-lq.mp3"
);

export class Hello extends React.Component {
  // code executed right when the component is created
  constructor() {
    super();
    this.state = { currentDate: new Date() };
  }

  // code executed right after the component is added to the DOM.
  componentDidMount() {
    const interval = setInterval(() => {
      this.setState({ currentDate: new Date() });
    }, 1000);

    this.setState({ interval });
  }

  // code executed right after state or props are updated
  componentDidUpdate() {
    beep.play();
  }

  // code executed just before the moment the component gets removed from the DOM.
  componentWillUnmount() {
    clearInterval(this.state.interval);
    beep.pause();
  }

  render() {
    return (
      <h1>
        Hello, {this.props.name}! The time is:
        {this.state.currentDate.toLocaleTimeString()}
      </h1>
    );
  }
}
