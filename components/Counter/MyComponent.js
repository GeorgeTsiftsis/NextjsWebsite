import React, { createRef, Component } from "react";

// ChildComponent uses React.forwardRef to obtain the ref passed to it
// and then forward it to the DOM div that it renders.
const ChildComponent = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <span>{props.children}</span>
  </div>
));

class MyComponent extends Component {
  componentDidMount() {
    const node = this.childRef.current;
    /* Uses DOM node  */
  }

  childRef = createRef();

  render() {
    return (
      // Pass the created ref to ChildComponent
      <ChildComponent ref={this.childRef}>{this.props.children}</ChildComponent>
    );
  }
}

export default MyComponent;
